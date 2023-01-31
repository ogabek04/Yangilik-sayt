const mongoose = require('mongoose')
module.exports = mongoose.model("audio", mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    file: { type: String, required: true },
    date: { type: Date, default: Date.now() }
}))