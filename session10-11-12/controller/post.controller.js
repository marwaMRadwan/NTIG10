const Post = require('../models/post.model')
class PostController{
    static async addPost(req, res){
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
    
    static async myPosts(req,res){
        try{
            await req.user.populate('myPosts')
            res.status(200).send( { apiStatus:true, data:req.user.myPosts, message:"data added"})
        }
        catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
        }
    }
    static async editPost(req,res){
        try{
            const post = await Post.findById(req.params.id)
            // res.send(post)
            // post.content = req.body.content
            for(let d in req.body){
                post[d] = req.body[d]
            }
            await post.save()
            res.status(200).send( { apiStatus:true, data:"", message:"data added"})
        }
        catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
        }

    }
}

module.exports = PostController