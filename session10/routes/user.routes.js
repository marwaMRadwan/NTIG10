const router = require('express').Router()
const User = require('../models/user.model')

// - register
router.post('/register', async (req,res)=>{
    try{
        const userData = new User(req.body)
        await userData.save()
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"data added successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "error in register"
        })
    }
})
// - login
// - logout
// - profile
// - edit profile
// - deactivate 
// - activate


module.exports = router