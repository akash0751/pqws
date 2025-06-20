const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true,
        unique: true},
    password: {
        type: String,
        required: true},
    role: {
        type: String,
        enum:['admin','user'],
        default:'user'}
},{timestamps:true})

const UserEmail = mongoose.model('UserEmail', RegisterSchema)
module.exports = UserEmail;