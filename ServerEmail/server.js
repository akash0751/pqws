const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoute = require('./routes/register')
const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/pq',userRoute)

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongoDB')
})