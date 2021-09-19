const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }, 
    email:{
        type:String,
        required:true,
        trim:true,
        unique: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email format')
        }
    }, 
    phone:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error( 'not egy number')
        }
    }, 
    password:{
        type:String,
        required:true,
        trim:true,
        // match :/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.\]).{8,32}$/
    }, 
    addresses :[
        {
            addrType:{
                type:String,
                trim:true
            },
            addrDetails:{
                type:String,
                trim:true
            }
        }
     ], 
    age:{
        type:Number,
        validate(value){
            if(value<21) throw new Error(' not avaliable')
        }
    }, 
    image:{
        type:String,
        trim:true
    }, 
    status:{
        type:Boolean,
        default: false
    }
}, 
{timestamps:true}
)

userSchema.pre('save', async function(){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 12 )
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User