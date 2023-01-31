const router = require('express').Router()
const TeamController = require("../controller/teamController")

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


router.post('/create', upload.single("image"),  TeamController.createData)
router.get('/all', TeamController.getAll)
router.get('/:id', TeamController.getOne)
router.put('/:id',  upload.single("image"), TeamController.updateData)
router.delete('/:id', TeamController.deleteData)

module.exports = router