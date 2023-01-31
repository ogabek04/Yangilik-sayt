const express = require('express');
const app = express();
const { port } = require("./config/index")
const database = require('./database/index')
const bodyParser = require('body-parser')
const path = require('path')
const expressLayout = require('express-ejs-layouts')


// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
database()
app.use(expressLayout)

// Backend api
app.use('/api/user', require('./router/userRouter'))
app.use('/api/category', require('./router/categoryRouter'))
app.use('/api/comment', require('./router/commentRouter'))
app.use('/api/reply', require('./router/replyRouter'))
app.use('/api/rss', require('./router/rssRouter'))
app.use('/api/tag', require('./router/tagRouter'))
app.use('/api/team', require('./router/teamRouter'))
app.use('/api/news', require('./router/newsRouter'))
app.use('/api/audio', require('./router/audioRouter'))
app.use('/api/advertisment', require('./router/advertisementRouter'))



// Frontend api
app.use(require('./views/admin/router/index'))

const server = app.listen(port, () => {
    console.log("Server is running  on", server.address().port)
})