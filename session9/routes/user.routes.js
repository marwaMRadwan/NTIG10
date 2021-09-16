const router = require('express').Router()
const userController = require('../controller/user.controller')
const User = require('../models/user.model')

router.post('/addUser', (req,res)=>{
    const myData = new User({name:"      abcAGV       "})
    myData.save()
    .then(()=> res.send(myData))
    .catch(e=> res.send(e))
})

module.exports = router