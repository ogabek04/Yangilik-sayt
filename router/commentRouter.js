const router = require('express').Router()
const CommentController = require("../controller/commentController")

router.post('/create', CommentController.createData)
router.get('/all', CommentController.getAll)
router.get('/:id', CommentController.getOne)
router.put('/:id', CommentController.updateOne)
router.delete('/:id', CommentController.deleteOne)

module.exports = router