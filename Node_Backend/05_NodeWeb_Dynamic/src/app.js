const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const path = require("path")
const hbs = require("hbs")

const viewPath = path.join(__dirname, "../Templates/views")
const partialPath = path.join(__dirname, "../Templates/partials")

app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialPath)

app.get("/", (req, resp) => {
    resp.render("index", { username: "Bharat" })
})

app.get("/about", (req, resp) => {
    resp.render("about")
})

app.get("/contact", (req, resp) => {
    resp.render("contact")
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})