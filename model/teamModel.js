const mongoose = require('mongoose')
module.exports = mongoose.model("team", mongoose.Schema({
    username: { type: String, required: true },
    image: { type: String, required: true },
    job: { type: String, required: true },
    date: { type: Date, default: Date.now() }
}))