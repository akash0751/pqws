const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true, required: true },
 
  createdAt: { type: Date, default: Date.now },
});

const UserPhone = mongoose.model('UserPhone', userSchema);
module.exports = UserPhone;
