const Multipliers =  require('../models/Multipliers')



const getMultipliers = async (req,res)=>{
    
    //Get user from token 
    
    const multipliers = await Multipliers.find()
    
    res.status(200).json(multipliers)
   


}

const getMultipliersId = async (req,res)=>{
    
    //Get user from token 
    
    const multipliers = await Multipliers.findOne({symbol:req.params.id.toUpperCase()})
    
    res.status(200).json(multipliers)
   


}

module.exports = {getMultipliers,getMultipliersId}