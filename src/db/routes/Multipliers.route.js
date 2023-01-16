const express = require('express')
const router = express.Router();

const {getMultipliers,getMultipliersId} = require('../handlers/Multipliers')

router.get('/',getMultipliers)
router.get('/:id',getMultipliersId)

module.exports = router