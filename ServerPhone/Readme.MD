Phone Number OTP Login System (Node.js + Twilio + JWT)

This project implements a simple, secure OTP-based login system using phone numbers and JWT authentication. Users receive an OTP via SMS, which is verified by the backend. Upon successful verification, a JWT is issued for user authentication.

---

## 🚀 Features

- ✅ Phone number-based login (no password)
- 🔐 OTP verification using **Twilio**
- 🧾 JWT-based session token
- 🗃 MongoDB for storing users
- 🧰 Clean and beginner-friendly Express backend

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **OTP SMS:** Twilio
- **Auth:** JWT

## Install dependencies

npm install

## Configure environment variables
.env

PORT='5000'
MONGO_URI='your-mongodb-url'
JWT_SECRET=your_jwt_secret

TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1xxxxxxxxxx

You can get a free Twilio trial and phone number from https://www.twilio.com/try-twilio


## Running the Server

npm run dev

## API Endpoints
1. POST /pq/register
Send OTP to user's phone number.

Request Body:

json

{
  "phone": "+919876543210"
}

Response:

json

{ "message": "OTP sent successfully" }

2. POST /pq/otpVerify
Verify the received OTP and issue JWT.

Request Body:

json

{
  "phone": "+919876543210",
  "otp": "123456"
}
Response:

json

{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

