const mongoose = require('mongoose')
module.exports = mongoose.model("rss", mongoose.Schema({
    email: { type: String, required: true },
    date: { type: Date, default: Date.now() }
}))