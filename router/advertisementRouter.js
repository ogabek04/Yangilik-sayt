const router = require('express').Router()
const AdvertisementController = require("../controller/advertisementController")

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


router.post('/create', upload.single("image"),  AdvertisementController.createData)
router.get('/all', AdvertisementController.getAll)
router.get('/:id', AdvertisementController.getOne)
router.put('/:id',  upload.single("image"), AdvertisementController.updateData)
router.delete('/:id', AdvertisementController.deleteData)

module.exports = router