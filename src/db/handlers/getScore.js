const bcrypt = require('bcrypt')
const { json } = require('express')
const Scores =  require('../models/Scores')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const getScore = async (req,res)=>{
    
    //Get user from token 
    
    const user_score = await Scores.findOne({pseudoname:req.pseudoname})
    
    res.status(200).json(user_score)
   


}

module.exports = {getScore}