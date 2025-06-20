const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserPhone',
        required: true
    },
    name:{
        type:String,
        required:true
    },
    vehicleNo:{
        type:String,
        required:true
    }
})

const userInfo = mongoose.model('UserInfo', userInfoSchema);
module.exports = userInfo