const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJwt = (req,res,next)=>{

    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json("Unauthorized");
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_S,
        (err, decoded) => {
            if (err) return res.status(403).json("Invalid token"); //invalid token
            req.pseudoname = decoded.pseudoname;
            console.log("Check succeeded")
            next()
            
        }
    );

}

module.exports = verifyJwt

