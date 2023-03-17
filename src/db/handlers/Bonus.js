const Bonus =  require('../models/Bonus')



const getBonus = async (req,res)=>{
    
    //Get user from token 
    const bonus = await Bonus.find()
    res.status(200).json(bonus)

}

const getBonusId = async (req,res)=>{
    
    //Get user from token 
    const bonus = await Bonus.findOne({bonusName:req.params.id})
    res.status(200).json(bonus)

}

module.exports = {getBonus,getBonusId}