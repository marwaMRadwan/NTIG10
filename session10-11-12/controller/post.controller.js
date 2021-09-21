const Post = require('../models/post.model')
const addPost = async(req, res)=>{
    try{
        const post = new Post({
            ...req.body,
            userId: req.user._id
        })
        await post.save()
        res.status(200).send( { apiStatus:true, data:post, message:"data added"})
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

const myPosts= async (req,res)=>{
    try{
        await req.user.populate('myPosts')
        res.status(200).send( { apiStatus:true, data:req.user.myPosts, message:"data added"})
    }
    catch(e){
    res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

module.exports = {addPost, myPosts}