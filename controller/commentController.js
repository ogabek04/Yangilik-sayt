const CommentModel = require('../model/commentModel');
const Container = require("../class/class")

exports.createData = async (req, res, next) => {
    const newClass = new Container(CommentModel, req, res, next)
    newClass.create_data()
}
exports.getAll = async (req, res, next) => {
    const newClass = new Container(CommentModel, req, res, next)
    newClass.get_all()
}
exports.getOne = async (req, res, next) => {
    const newClass = new Container(CommentModel, req, res, next)
    newClass.get_one()
}
exports.updateOne = async (req, res, next) => {
    const newClass = new Container(CommentModel, req, res, next)
    newClass.update_context()
}
exports.deleteOne = async (req, res, next) => {
    const newClass = new Container(CommentModel, req, res, next)
    newClass.delete_context()
}