const AudioModel = require('../model/audioModel');
const Container = require('../class/class')
const path = require('path')
const fs = require('fs')


exports.createData = async (req, res, next) => {
    const { USERNAME, DURATION } = req.body;
    const { filename } = req.file;
    const Audio = new AudioModel({
        name: USERNAME,
        duration: DURATION,
        file: filename,
    })
    Audio.save()
        .then(() => {
            res.json(Audio)
        })
        .catch((error) => {
            res.json(error.message)
        })
}
exports.getAll = async (req, res, next) => {
    const newClass = new Container(AudioModel, req, res, next)
    newClass.get_all()
}
exports.getOne = async (req, res, next) => {
    const newClass = new Container(AudioModel, req, res, next)
    newClass.get_one()
}
exports.updateData = async (req, res, next) => {

    
    const getAudio = await AudioModel.findById(req.params.id)
    const image = getAudio.file;
    const pathFile = path.join(__dirname, `../public/images/${image}`)
    fs.unlink(pathFile, (error) => {
        []
    })

    // 2. yangi faylni yuklash;
    const { USERNAME, DURATION } = req.body
    const { filename } = req.file
    const updateAudio = await AudioModel.findByIdAndUpdate(req.params.id)

    updateAudio.name = USERNAME
    updateAudio.duration = DURATION
    updateAudio.file = filename
    updateAudio.save()
        .then(() => {
            res.json(updateAudio)
        })
        .catch((error) => {
            res.json(error.message)
        })
}

exports.deleteData = async (req, res, next) => {
    const getAudio = await AudioModel.findById(req.params.id)
    const image = getAudio.file;
    const pathFile = path.join(__dirname, `../public/images/${image}`)
    fs.unlink(pathFile, (error) => {
        []
    })
    await AudioModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "Deleted"
    })
}





