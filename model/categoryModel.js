const mongoose = require('mongoose')
module.exports = mongoose.model("category", mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now() }
}))