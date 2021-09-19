const router = require('express').Router()
const User = require('../models/user.model')

router.post('', (req,res)=> res.send("test user routes"))

module.exports = router