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
        type : String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true,
        validate(value){
           if(!validator.isEmail(value))  throw new Error('invalid email')
        }
    },
    password:{
        type : String,
        trim:true,
        minlength:6,
        maxlength:20,
        required: true,
        validate(value){
            if(value.includes('123')) throw new Error('invalid password')
        }
    },
    gender:{
        type : String,
        trim : true,
        enum:["male", "female"]
    },
    age:{
        type : Number,
        validate(value){
            if(value<21) throw new Error('minmum age is 21')
        }
    },
    status:{
        type : Boolean,
        default: false
    },
    createdAt:{
        type : Date,
        default: new Date()
    }
})

module.exports = User