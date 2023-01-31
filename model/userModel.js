const mongoose = require('mongoose')
module.exports = mongoose.model("user", mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "manager"] },
    date: { type: Date, default: Date.now() }
}))