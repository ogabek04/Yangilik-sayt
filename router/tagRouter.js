const router = require('express').Router()
const TagController = require("../controller/tagController")

router.post('/create', TagController.createData)
router.get('/all', TagController.getAll)
router.get('/:id', TagController.getOne)
router.put('/:id', TagController.updateOne)
router.delete('/:id', TagController.deleteOne)

module.exports = router