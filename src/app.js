const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get('/', (req,res) => {
    res.render("index");
})

app.post('/', (req,res)=>{
    res.render("sucess");
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})