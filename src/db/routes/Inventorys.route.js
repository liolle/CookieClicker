const express = require('express')
const router = express.Router();

const {getInventory,setInventory} = require('../handlers/Inventorys')


router.get('/',getInventory)
router.post('/',setInventory)

module.exports = router