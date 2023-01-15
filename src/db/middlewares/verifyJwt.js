const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJwt = (req,res,next)=>{

    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.sendStatus(401);
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_S,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.pseudoname = decoded.pseudoname;
            next()
            
        }
    );

}

module.exports = verifyJwt

