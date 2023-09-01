import express from "express";
import bodyParser from "body-parser";
import dayjs from "dayjs";

const app = express();
const port = 3000;
let page = "/home";
const todohome = [];
const todowork = [];
var day = dayjs();
var currentDay = day.format("dddd, MMMM D");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    page = "/home";
    res.render("index.ejs", {
        page: page,
        currentDay: currentDay,
        todo: todohome
    });
});

app.post("/", (req, res) => {
    page = "/home";
    todohome.push(req.body["newItem"]);
    res.redirect("index.ejs", {
        page: page,
        currentDay: currentDay
    });
});

app.get("/home", (req, res) => {
    page = "/home";
    res.render("index.ejs", {
        page: page,
        currentDay: currentDay,
        todo: todohome
    });
});

app.post("/home", (req, res) => {
    todohome.push(req.body["newItem"]);
    res.redirect("/home");
})

app.get("/work", (req, res) => {
    page = "/work";
    res.render("index.ejs", {
        page: page,
        todo: todowork
    });
});

app.post("/work", (req, res) => {
    todowork.push(req.body["newItem"]);
    res.redirect("/work");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});