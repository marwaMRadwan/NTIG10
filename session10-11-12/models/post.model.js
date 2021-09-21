const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    postType:{
        type:String,
        required:true,
        enum: ['txt', 'img', 'vid'],
        trim:true
    },
    content:{
        type:String,
        required: function(){ return this.postType=="txt"}
    },
    postFile:{
        type:String,
        required: function(){ return this.postType !="txt"}
    },
    comments :[
        {
            text:{},
            userId:{}
        }
    ]
}, {timeStamps: true})

const Post = mongoose.model('Post', postSchema)
module.exports = Post