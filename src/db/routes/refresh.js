const express = require('express')
const router = express.Router();

const {refreshToken} = require('../handlers/refresh')

router.post('/',refreshToken)

module.exports = router