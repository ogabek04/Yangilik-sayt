const mongoose = require('mongoose')
module.exports = mongoose.model("comment", mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    newsID: { type: mongoose.Schema.ObjectId, ref: "news", required: true },
    date: { type: Date, default: Date.now() }
}))