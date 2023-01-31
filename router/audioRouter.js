const router = require('express').Router()
const AudioController = require("../controller/audioController")

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


router.post('/create', upload.single("image"),  AudioController.createData)
router.get('/all', AudioController.getAll)
router.get('/:id', AudioController.getOne)
router.put('/:id',  upload.single("image"), AudioController.updateData)
router.delete('/:id', AudioController.deleteData)

module.exports = router