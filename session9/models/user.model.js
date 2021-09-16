const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name:{
        type : String,
        trim : true,
        lowercase : true,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    email:{
        type : String
    },
    password:{
        type : String
    },
    gender:{
        String : String
    },
    age:{
        type : Number
    },
    status:{
        type : Boolean
    },
    createdAt:{
        type : Date
    }
})

module.exports = User