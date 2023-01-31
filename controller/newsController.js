const NewsModel = require('../model/newsModel');
const Container = require("../class/class")
const path = require('path');
const fs = require("fs")

exports.createData = async (req, res, next) => {
    try {
        const { title, description, author, category, tag } = req.body

        const arrayImages = []
        const files = req.files;
        for (const item of files) {
            const { filename } = item;
            arrayImages.push(filename)
        }

        const news = new NewsModel({
            title: title,
            description: description,
            image: arrayImages,
            author: author,
            categoryID: category,
            tagID: tag,
        })
        news.save()
        res.json(news)
    }
    catch (error) {
        res.json(error.message)
    }

}
exports.getAll = async (req, res, next) => {
    const newClass = new Container(NewsModel, req, res, next)
    newClass.get_all()
}
exports.getOne = async (req, res, next) => {
    const newClass = new Container(NewsModel, req, res, next)
    newClass.get_one()
}
exports.getNewsByCategory = async (req, res, next) => {
    const result = await NewsModel.find({ categoryID: req.params.id }).lean()
    res.json(result)
}
exports.getNewsByTag = async (req, res, next) => {
    const result = await NewsModel.find({ tagID: req.params.id }).lean()
    res.json(result)
}
exports.updateOne = async (req, res, next) => {
    // 1. eski faylni ochirish;
    const getNews = await NewsModel.findById(req.params.id)
    const images = getNews.image; // []
    for (const img of images) {
        const pathFile = path.join(__dirname, `../public/images/${img}`)
        fs.unlink(pathFile, (error) => {
            []
        })
    }
    // 2. yangi faylni yuklash;
    try {
        const newsUpdate = await NewsModel.findByIdAndUpdate(req.params.id)
        const { title, description, author } = req.body

        const arrayImages = []
        const files = req.files;
        for (const item of files) {
            const { filename } = item;
            arrayImages.push(filename)
        }

        newsUpdate.title = title
        newsUpdate.description = description
        newsUpdate.image = arrayImages
        newsUpdate.author = author

        newsUpdate.save()
        res.json(newsUpdate)
    }
    catch (error) {
        res.json(error.message)
    }
}
exports.deleteOne = async (req, res, next) => {
    // 1. eski faylni ochirish;
    const getNews = await NewsModel.findById(req.params.id)
    const images = getNews.image; // []
    for (const img of images) {
        const pathFile = path.join(__dirname, `../public/images/${img}`)
        fs.unlink(pathFile, (error) => {
            []
        })
    }

    await NewsModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "Deleted"
    })
}