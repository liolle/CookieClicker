const jwt = require('jsonwebtoken');
require('dotenv').config();
const Users =  require('../models/Users')

const refreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies || !cookies.jwt_cclicker) return res.sendStatus(401);
    const refreshToken = cookies.jwt_cclicker;

    
    const user = await Users.findOne({token:refreshToken}).select({ token: 1,pseudoname:1 });
    
    if (!user) return res.status(403).json({
        msg: "token expired login to creat a new one"
    }) //Forbidden 
    
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_S, 
        (err, decoded) => {
            
            if (err || user.pseudoname !== decoded.pseudoname) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "pseudoname": decoded.pseudoname },
                process.env.ACCESS_TOKEN_S,
                { expiresIn: process.env.ACCESS_TOKEN_TTL }
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { refreshToken }