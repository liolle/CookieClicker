const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('getting a list of all Scores')
})

router.post('/',(req,res,next)=>{
    res.send('adding an element into the list of scores')
})

module.exports = router