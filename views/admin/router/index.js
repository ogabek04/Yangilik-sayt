const router = require("express").Router()


router.get("/admin/advertisement", async(req, res) => {
    res.render("./admin/app/advertisement.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/audio", async(req, res) => {
    res.render("./admin/app/audio.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/category", async(req, res) => {
    res.render("./admin/app/category.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/dashboard", async(req, res) => {
    res.render("./admin/app/dashboard.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/news", async(req, res) => {
    res.render("./admin/app/news.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/rss", async(req, res) => {
    res.render("./admin/app/rss.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/tag", async(req, res) => {
    res.render("./admin/app/tag.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/team", async(req, res) => {
    res.render("./admin/app/team.ejs", {layout: "./admin/app/MAIN.ejs"})
})
router.get("/admin/user", async(req, res) => {
    res.render("./admin/app/user.ejs", {layout: "./admin/app/MAIN.ejs"})
})






module.exports = router