const router = require('express').Router()
const RSSController = require("../controller/rssController")

router.post('/create', RSSController.createData)
router.get('/all', RSSController.getAll)
router.get('/:id', RSSController.getOne)
router.put('/:id', RSSController.updateOne)
router.delete('/:id', RSSController.deleteOne)

module.exports = router