const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('getting a list of all Multiplier')
})

router.post('/',(req,res,next)=>{
    res.send('POST request not available')
})

module.exports = router