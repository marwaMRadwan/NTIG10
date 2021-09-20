const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
/*
get authroization value from header
verify token to get user_id
search _id, token for which user
if !user not auth
return user 
 */
const auth = async(req, res, next)=>{
    try{    
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWTKEY)
        const user = await User.findOne({_id:decoded._id, 'tokens.token':token})
        if(!user) throw new Error('user not found')
        // res.send(user)
        req.user= user
        req.token= token
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message:"unAuthorized"
        })
    }
}

module.exports = auth