const express = require('express');
const router = express.Router();
const {addInfo,getUserInfo,updateInfo,deleteInfo} = require('../controller/userInfo')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/add',authMiddleware,addInfo)
router.get('/get/:userId',authMiddleware,getUserInfo)
router.put('/update/:userId',authMiddleware,updateInfo)
router.delete('/delete/:id',authMiddleware,deleteInfo)

module.exports = router;