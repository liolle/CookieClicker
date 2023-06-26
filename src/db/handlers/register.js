const bcrypt = require('bcrypt')
const Users =  require('../models/Users')


const register = async (req,res)=>{
    const {pseudo, pwd} = req.body

    if(!pseudo || !pwd){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    } 

    const dup = await Users.findOne({pseudoname:pseudo}).exec();

    if (dup){
        res.status(400).json({msg: "Pseudoname not available"})
        return 
    }
    
    try {
        
        const hashedPwd =  await bcrypt.hash(pwd, 10)
        const result = await Users.create( {
            "pseudoname":pseudo,
            "password":hashedPwd
        });
        res.status(200).json({msg: "New user created "});
        console.log(result)
        
    } catch (error) {
        res.status(500).json({error});
        return
    }

}

module.exports = {register}