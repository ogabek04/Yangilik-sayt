const router = require('express').Router()
const CategoryController = require("../controller/categoryController")


router.post('/create', CategoryController.createData)
router.get('/all', CategoryController.getAll)
router.get('/:id', CategoryController.getOne)
router.put('/:id', CategoryController.updateOne)
router.delete('/:id', CategoryController.deleteOne)

module.exports = router