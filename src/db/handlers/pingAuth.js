const Scores =  require('../models/Scores')

const pingAuth = async (req,res)=>{
    res.status(200).json("ping")
}

module.exports = {pingAuth}