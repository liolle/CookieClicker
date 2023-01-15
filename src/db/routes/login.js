const express = require('express')
const router = express.Router();

const {login} = require('../handlers/login')

router.post('/',login)

module.exports = router