const router = require("express").Router()
const userController = require('../controller/user.controller')

router.get('', userController.getAll)
router.get('/single', userController.getSingle)
router.get('/addUser', userController.addUser)
router.get('/editUser', userController.editUser)
module.exports = router