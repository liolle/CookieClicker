const express = require('express')
const router = express.Router();

const {logout} = require('../handlers/logout')

router.post('/',logout)

module.exports = router