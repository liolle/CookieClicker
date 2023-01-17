const bcrypt = require('bcrypt')
const { json } = require('express')
const Users =  require('../models/Users')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const login = async (req,res)=>{
    const {pseudo,pwd,token} = req.body

    if((!pseudo || !pwd) && !token){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    } 

    if ((!pseudo || !pwd)){
        //Connect with token
    }

    const dup = await Users.findOne({pseudoname:pseudo}).exec();  

    if (!dup){
        res.status(400).json({msg: "pseudoname or pwd incorrect"})
        return 
    }

    if(bcrypt.compareSync(pwd,dup['password'])){
        //Creat token and sent it

        const accessToken = jwt.sign(
            {"pseudoname": pseudo},
            process.env.ACCESS_TOKEN_S,
            {expiresIn:process.env.ACCESS_TOKEN_TTL}
        )

        const refreshToken = jwt.sign(
            {"pseudoname": pseudo},
            process.env.REFRESH_TOKEN_S,
            {expiresIn:process.env.REFRESH_TOKEN_TTL}
        )

        try {
            
            Object.assign(dup,{token:refreshToken})
            dup.save()
            res.cookie("jwt_cclicker",refreshToken,{httpOnly:true,maxAge:24*60*60*1000})
            res.status(200).json({
                msg: "Connection succeeded",
                token:accessToken
            })
        } catch (error) {
            res.status(500).json({msg: "Connection issues"})
        }

    }
    else{
        res.status(400).json({msg: "pseudoname or pwd incorrect"})
        return
    }


}

module.exports = {login}