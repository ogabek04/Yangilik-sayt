const router = require('express').Router()
const NewsController = require("../controller/newsController")

const multer = require('multer');
const md5 = require('md5')
const path = require("path")

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './public/images')
        },
        filename: function (req, file, callback) {
            callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
        }
    })
})


router.post('/create', upload.array("image", 12), NewsController.createData)
router.get('/all', NewsController.getAll)
router.get('/category/:id', NewsController.getNewsByCategory)
router.get('/tag/:id', NewsController.getNewsByTag)
router.get('/:id', NewsController.getOne)
router.put('/:id', upload.array("image", 12), NewsController.updateOne)
router.delete('/:id', NewsController.deleteOne)

module.exports = router