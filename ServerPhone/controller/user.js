const UserPhone = require('../model/user')
const twilio = require('twilio')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const OTP_STORE = new Map();

const register = async (req, res) =>{
    const { phone } = req.body;

  if (!phone) return res.status(400).json({ message: 'Phone number is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  OTP_STORE.set(phone, { otp, expiresAt: Date.now() + 5 * 60 * 1000 });

  try {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    res.json({ message: 'OTP sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
}

const otpVerify = async (req, res) =>{
    const { phone,otp } = req.body;
  const stored = OTP_STORE.get(phone);

  if (!stored || stored.otp !== otp) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  let user = await UserPhone.findOne({ phone });
  if (!user) {
    user = await UserPhone.create({ phone });
  }

  const token = jwt.sign({ userId: user._id, phone }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.cookie('jwt',token,{
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 24 *60* 60 * 1000 
    })  

  OTP_STORE.delete(phone);

  res.json({ token });
}

const logout = async (req, res) =>{
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
}

module.exports = {register,otpVerify,logout}