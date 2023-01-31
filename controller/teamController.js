const TeamModel = require('../model/teamModel');
const Container = require('../class/class')
const path = require('path')
const fs = require('fs')


exports.createData = async (req, res, next) => {
    const { USERNAME, JOB } = req.body;
    const { filename } = req.file;
    const teamMember = new TeamModel({
        username: USERNAME,
        job: JOB,
        image: filename,
    })
    teamMember.save()
        .then(() => {
            res.json(teamMember)
        })
        .catch((error) => {
            res.json(error.message)
        })
}
exports.getAll = async (req, res, next) => {
    const newClass = new Container(TeamModel, req, res, next)
    newClass.get_all()
}
exports.getOne = async (req, res, next) => {
    const newClass = new Container(TeamModel, req, res, next)
    newClass.get_one()
}
exports.updateData = async (req, res, next) => {

    // 1. eski faylni ochirish;
    const getTeam = await TeamModel.findById(req.params.id)
    const image = getTeam.image;
    const pathFile = path.join(__dirname, `../public/images/${image}`)
    fs.unlink(pathFile, (error) => {
        []
    })

    // 2. yangi faylni yuklash;
    const { USERNAME, JOB } = req.body
    const { filename } = req.file;
    const updateTeam = await TeamModel.findByIdAndUpdate(req.params.id)

    updateTeam.username = USERNAME
    updateTeam.job = JOB
    updateTeam.image = filename
    updateTeam.save()
        .then(() => {
            res.json(updateTeam)
        })
        .catch((error) => {
            res.json(error.message)
        })

}

exports.deleteData = async (req, res, next) => {
    // 1. eski faylni ochirish;
    const getTeam = await TeamModel.findById(req.params.id)
    const image = getTeam.image;
    const pathFile = path.join(__dirname, `../public/images/${image}`)
    fs.unlink(pathFile, (error) => {
        []
    })
    await TeamModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "Deleted"
    })
}





