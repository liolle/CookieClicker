const express = require('express')
const router = express.Router();

const {getScore} = require('../handlers/getScore')
const {setScore} = require('../handlers/setScore')

router.get('/',getScore)
router.post('/',setScore)

module.exports = router