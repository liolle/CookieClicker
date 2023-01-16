const express = require('express')
const router = express.Router();

const {getBonus,getBonusId} = require('../handlers/Bonus')

router.get('/',getBonus)
router.get('/:id',getBonusId)

module.exports = router