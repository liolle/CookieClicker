const bcrypt = require('bcrypt')
const { json } = require('express')
const Scores =  require('../models/Scores')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const setScore = async (req,res)=>{

    //check header content

    const {pseudo,score} = req.body

    if((!score) && !token){
        res.status(400).json({message: "Missing body"})
        return
    } 


    const user_score = await Scores.findOne({pseudoname:req.pseudoname})
    

    try {
        Object.assign(user_score,{score:req.body.score})
        user_score.save()
      
        res.status(200).json({
            msg: "Db updated"
        })
    } catch (error) {
        res.status(500).json({msg: "Update issues"})
    }

   


}

module.exports = {setScore}