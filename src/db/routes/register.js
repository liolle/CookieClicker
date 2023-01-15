const express = require('express')
const router = express.Router();

const {register} = require('../handlers/register')

router.post('/',register)

module.exports = router