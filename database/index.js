const mongoose = require('mongoose')
const { database, option } = require("../config/index")
module.exports = () => {
    mongoose.connect(database, option)
        .then(() => console.log("Database is running"))
        .catch((error) => console.log(error.message))
}