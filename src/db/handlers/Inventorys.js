const Inventorys =  require('../models/Inventorys')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const getInventory = async (req,res)=>{
    
    //Get user from token 
    
    const user_inventory = await Inventorys.findOne({pseudoname:req.pseudoname})
    
    res.status(200).json(user_inventory)
   


}

const setInventory = async (req,res)=>{
    
    //Get user from token 
    
    const {bonus} = req.body

    if((!bonus) && !token){
        res.status(400).json({message: "Missing body"})
        return
    } 


    const user_inventory = await Inventorys.findOne({pseudoname:req.pseudoname})


    try {
        Object.assign(user_inventory,{bonus:req.body.bonus})
        user_inventory.save()
      
        res.status(200).json({
            msg: "Db updated"
        })
    } catch (error) {
        res.status(500).json({msg: "Update issues"})
    }
   


}

module.exports = {getInventory,setInventory}