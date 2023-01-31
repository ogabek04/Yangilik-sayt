const router = require('express').Router()
const UserController = require("../controller/userController")


router.post('/create', UserController.createData)
router.get('/all', UserController.getAll)
router.get('/:id', UserController.getOne)
router.put('/:id', UserController.updateOne)
router.delete('/:id', UserController.deleteOne)

module.exports = router