const express = require('express')
const router = express.Router()
const {register,otpVerify,logout} = require('../controller/user')

router.post('/register',register)
router.post('/otpVerify',otpVerify)
router.post('/logout',logout)

module.exports = router;

