const jwt = require('jsonwebtoken');
require('dotenv').config();
const Users =  require('../models/Users')

// const refreshToken = async (req, res) => {
//     const cookies = req.cookies;
//     if (!cookies || !cookies.jwt_cclicker) return res.sendStatus(401);
//     const refreshToken = cookies.jwt_cclicker;

    
//     const user = await Users.findOne({token:refreshToken}).select({ token: 1,pseudoname:1 });
    
//     if (!user) return res.status(403).json("token expired login to creat a new one") //Forbidden 
    
//     jwt.verify(
//         refreshToken,
//         process.env.REFRESH_TOKEN_S, 
//         (err, decoded) => {
            
//             if (err || user.pseudoname !== decoded.pseudoname) return res.status(403).json("token expired login to creat a new one");
//             const accessToken = jwt.sign(
//                 { "pseudoname": decoded.pseudoname },
//                 process.env.ACCESS_TOKEN_S,
//                 { expiresIn: process.env.ACCESS_TOKEN_TTL }
//             );
//             res.status(200).json({
//                 token:"accessToken"
//             } )
//         }
//     );
// }

const refreshToken = async (req, res) => {
    const cookies = req.cookies;
    console.log("1");
    if (!cookies || !cookies.jwt_cclicker){
        res.status(401).json("Refresh Tokent differs")
        return 
    } 
    const refreshToken = cookies.jwt_cclicker;

    
    const user = await Users.findOne({token:refreshToken}).select({ token: 1,pseudoname:1 });
    console.log("2");
    if (!user) return res.status(403).json("token expired login to creat a new one") //Forbidden 
    
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_S, 
        (err, decoded) => {
            console.log("3");
            if (err || user.pseudoname !== decoded.pseudoname){
                res.status(403).json("token expired login to creat a new one");
                return 
            } 
            console.log("4");
            const accessToken = jwt.sign(
                { "pseudoname": decoded.pseudoname },
                process.env.ACCESS_TOKEN_S,
                { expiresIn: process.env.ACCESS_TOKEN_TTL }
            );
            res.status(200).json({
                token:"accessToken"
            } )
        }
    );
}



module.exports = { refreshToken }