const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const hbs = require("hbs");

app.use(express.static("D:/Websites/Corona Tracker/public"));

app.set("views", "D:/Websites/Corona Tracker/templates/views");

hbs.registerPartials("D:/Websites/Corona Tracker/templates/partials")

app.set("view engine", "hbs");


app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/precautions", (req, res)=>{
    res.render("precautions")
})

app.get("/symptoms", (req, res)=>{
    res.render("symptoms")
})


app.listen(port);
