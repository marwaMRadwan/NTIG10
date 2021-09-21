const router = require('express').Router()
const auth = require('../middleware/auth')
const userController = require('../controller/user.controller')
const upload = require('../middleware/fileUpload')

router.post('/register', userController.register)
router.post('/addAddr/:id', userController.addAddr)
router.post('/login', userController.login)
router.post('/logout',auth, userController.logOut)
router.post('/logoutAll',auth, userController.logOutAll)
router.post('/me',auth,userController.me)
router.post('/addPImg', auth, upload.single('img'), userController.addPImg)

module.exports = router