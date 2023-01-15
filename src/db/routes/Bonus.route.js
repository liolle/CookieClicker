const express = require('express')
const router = express.Router();

const { connectTodb,getDb } = require('../db_util')
let db


connectTodb((err)=>{  
    
    if(!err){
        db = getDb()

        router.get('/',(req,res,next)=>{
            
            let elements = []
            
            db.collection('bonus')
            .find()
            .forEach(element => elements.push(element))
            .then(()=>{
                res.status(200).json(elements)
            })
            .catch(()=>{
                res.status(400).json({error: "Could not fetch document"})
            })
        })
        
        router.post('/',(req,res,next)=>{
            res.status(400).json({error: "POST request not available"})
        })

    }
    else{
        console.log(err)
    }


})




module.exports = router