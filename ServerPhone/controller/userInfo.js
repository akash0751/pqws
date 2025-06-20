const UserPhone = require('../model/user')
const UserInfo = require('../model/userInfo')
const dotenv = require('dotenv')
dotenv.config()

const addInfo = async (req, res) =>{
    try{
        const {name,vehicleNo} = req.body
        const userInfo = await UserInfo.create({
            name:name,
            vehicleNo:vehicleNo,
            user:req.user.userId
        })
        res.status(201).json({message:'User Info Added Successfully',data:userInfo})
    }catch(Error){
        res.status(500).json({message:Error.message});
        }
    }

const getUserInfo = async (req, res) => {
  try {
    const userInfo = await UserInfo.findOne({ user: req.params.userId });

    if (!userInfo) {
      return res.status(404).json({ message: 'User Info Not Found', data: null });
    }

    res.status(200).json({ data: userInfo });
  } catch (error) {
    res.status(500).json({ message: 'Error Occurred', data: null });
  }
};


const updateInfo = async (req, res) => {
  try {
    const { userId } = req.params;

    const userInfo = await UserInfo.findOneAndUpdate(
      { user: userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!userInfo) {
      return res.status(404).json({ message: 'User Info Not Found', data: null });
    }

    res.status(200).json({ message: "Updated Successfully", data: userInfo });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error Occurred' });
  }
};


const deleteInfo = async (req, res) =>{
    try{
        const userInfo = await UserInfo.findOneAndDelete({user:req.params.id})
        if(!userInfo){
            res.status(404).json({message:'User Info Not Found',data:null})
        }
        res.status(200).json({message:'Detail deleted Successfully',userInfo})

    }catch{
        res.status(500).json({message:'Error Occured',data:null})
    }
}

module.exports = {addInfo,getUserInfo,updateInfo,deleteInfo}
