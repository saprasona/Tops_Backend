const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")

const templatePath = path.join(__dirname, 'Templates')
// console.log(templatePath);


app.get("/", (req, resp) => {
    //resp.send("Welcome to home")
    resp.sendFile(templatePath + "/home.html")
})

app.get("/about", (req, resp) => {
    //resp.send("About Us")
    resp.sendFile(templatePath + "/about.html")
})

app.get("*", (req, resp) => {
    //resp.send("Page not found")   
    resp.sendFile(templatePath + "/error.html")
})



app.listen(3000, () => {
    console.log(`server running on port : ${PORT}`)
    console.log("http://localhost:3000");
    
})