const { createTransport } = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
const sendMail = async (email, subject, text) => {
  try {
    
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
      }
    });

    // Send mail
    await transporter.sendMail({
      from: process.env.EMAIL, 
      to: email,               
      subject: subject,        
      text: text               
    });

    console.log(`Email sent to ${email}`); 

  } catch (error) {
    
    console.error('Error sending email:', error.message || error);
    throw new Error('Unable to send OTP');
  }
};

module.exports = sendMail;

