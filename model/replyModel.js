const mongoose = require('mongoose')
module.exports = mongoose.model("reply", mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    commentID: { type: mongoose.Schema.ObjectId, ref: "comment", required: true },
    date: { type: Date, default: Date.now() }
}))