const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
 try {
     let token = req.headers['authorization']|| req.cookies.jwt;
 
     if (!token) {
       return res.status(401).json({ message: "Token not provided" });
     }
 
    
     if (token.startsWith("Bearer ")) {
       token = token.split(" ")[1];
     } else {
       return res.status(401).json({ message: "Invalid token format" });
     }
 
     jwt.verify(token, process.env.SECRET_CODE, (err, decoded) => {
   if (err) {
     console.error("JWT Verification Error:", err.message);
     return res.status(401).json({ message: "Invalid token: " + err.message });
   }
 
 
       req.user = decoded;
       next(); 
     });
 
   } catch (error) {
     console.error("JWT Error:", error);
     return res.status(500).json({ message: "Authentication error" });
   }
 };

module.exports = authMiddleware;
