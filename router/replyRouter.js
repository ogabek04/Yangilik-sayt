const router = require('express').Router()
const ReplyController = require("../controller/replyController")


router.post('/create', ReplyController.createData)
router.get('/all', ReplyController.getAll)
router.get('/:id', ReplyController.getOne)
router.put('/:id', ReplyController.updateOne)
router.delete('/:id', ReplyController.deleteOne)

module.exports = router