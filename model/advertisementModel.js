const mongoose = require('mongoose')
module.exports = mongoose.model("advertisement", mongoose.Schema({
    image: { type: String, required: true },
    date: { type: Date, default: Date.now() }
}))