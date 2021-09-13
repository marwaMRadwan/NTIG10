const router = require("express").Router()
const userController = require('../controller/user.controller')

router.get('/addUser', userController.addUser)
router.post('/addUser', userController.saveUser)

router.get('', userController.getAll)

router.get('/single/:id', userController.getSingle)
router.get('/editUser/:id', userController.editUser)
router.get('/del/:id', userController.getSingle)

router.get('*', userController.err404)
module.exports = router