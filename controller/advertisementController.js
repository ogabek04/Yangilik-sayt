const advertisementModel = require('../model/advertisementModel');
const Container = require('../class/class')
const path = require('path')
const fs = require('fs')


exports.createData = async (req, res, next) => {
    const { filename } = req.file;
    const advertisement = new advertisementModel({
        image: filename,
    })
    advertisement.save()
        .then(() => {
            res.json(advertisement)
        })
        .catch((error) => {
            res.json(error.message)
        })
}
exports.getAll = async (req, res, next) => {
    const newClass = new Container(advertisementModel, req, res, next)
    newClass.get_all()
}
exports.getOne = async (req, res, next) => {
    const newClass = new Container(advertisementModel, req, res, next)
    newClass.get_one()
}
exports.updateData = async (req, res, next) => {

    const getAdvertisment = await advertisementModel.findById(req.params.id)
    const image = getAdvertisment.image;
    const pathFile = path.join(__dirname, `../public/images/${image}`)
    fs.unlink(pathFile, (error) => {
        []
    })

    const { filename } = req.file;
    const updateAdvertisment = await advertisementModel.findByIdAndUpdate(req.params.id)

    updateAdvertisment.image = filename
    updateAdvertisment.save()
        .then(() => {
            res.json(updateAdvertisment)
        })
        .catch((error) => {
            res.json(error.message)
        })

}

exports.deleteData = async (req, res, next) => {
    const getAdvertisment = await advertisementModel.findById(req.params.id)
    const image = getAdvertisment.image;
    const pathFile = path.join(__dirname, `../public/images/${image}`)
    fs.unlink(pathFile, (error) => {
        []
    })
    await advertisementModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "Deleted"
    })
}





