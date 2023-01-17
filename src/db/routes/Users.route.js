const express = require('express')
const router = express.Router();

const {pingAuth} = require('../handlers/pingAuth')

router.get('/',pingAuth)

module.exports = router