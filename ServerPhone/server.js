const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoute = require('./routes/user')
const userInfoRoute = require('./routes/userInfo')
dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/pq',userRoute)
app.use('/pq',userInfoRoute)
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongoDB')
})