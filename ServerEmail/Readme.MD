# 📧 Email OTP Authentication System (Node.js + Nodemailer + JWT)

A secure and user-friendly authentication system that uses **email-based OTPs** for verifying users during registration and password resets. This backend API is built with **Node.js**, **Express**, and **JWT**, and sends OTPs using **Nodemailer**.

---

## 🚀 Features

- ✅ Register with email and get OTP
- 🔐 Email OTP verification
- 🔑 Secure login with password
- 🔁 Forgot password flow using email OTP
- 🧾 JWT-based session tokens
- ✉️ Uses Nodemailer for sending OTP via email

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Auth:** JWT (JSON Web Token)
- **Email OTP:** Nodemailer
- **Database:** MongoDB (Mongoose)

---

## Install dependencies

npm install

## Set up .env file
.env

PORT=5000
MONGO_URI=mongodb:'your-mongodb-url
JWT_SECRET=your_jwt_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password
💡 Use Gmail App Passwords if you're using Gmail with 2FA.

## API Endpoints
🔹 1. POST /pq/user
Register a new user and send OTP to their email

Request Body:

json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "john123"
}

🔹 2. POST /pq/verifyUser
Verify email OTP to activate user

Request Body:

json
{
  "otp": 123456
}

User created Successfully

🔹 3. POST /pq/login
Login with email & password

Request Body:

json
{
  "email": "john@gmail.com",
  "password": "john123"
}
Response:

json

{
  "message": "Login successful",
  "token": "eyJhbGciOi..."
}

🔹 4. POST /pq/forgotPassword
Send OTP to email to reset password

Request Body:

json
{
  "email": "john@gmail.com"
}

🔹 5. POST /pq/verifyOtp
Verify OTP for password reset

Request Body:

json
{
  "otp": 123456
}

🔹 6. POST /pq/resetPassword
Reset the user's password

Request Body:

json
{
  "newPassword": "newpass123"
}


Feel free to fork or modify for your own use!
