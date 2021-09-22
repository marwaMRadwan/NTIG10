const router = require('express').Router()
const postController = require('../controller/post.controller')
const auth = require('../middleware/auth')

router.post('/add',auth, postController.addPost)

router.get('/myPosts', auth, postController.myPosts)
router.patch('/edit/:id', auth, postController.editPost)
module.exports=router