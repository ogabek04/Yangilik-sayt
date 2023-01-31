const mongoose = require('mongoose')
module.exports = mongoose.model("news", mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: [{ type: String, required: true }],
    author: { type: String, required: true },
    categoryID: { type: mongoose.Schema.ObjectId, ref: "category", required: true },
    tagID: { type: mongoose.Schema.ObjectId, ref: "tag", required: true },
    date: { type: Date, default: Date.now() }
}))