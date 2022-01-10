const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const items = [
        {
            title: "D",
            message: "esenvolver é massa"
        },
        {
            title: "E",
            message: "JS da dinheiro"
        },
        {
            title: "I",
            message: "saac é dms"
        }
    ];
    const subtitle = "Isaac é massa, mo top e vai ganhar dinheiro"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
})
app.get("/sobre", (req, res) => {
    res.render("pages/about");
})

app.listen(8080);