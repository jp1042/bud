var express = require("express");
var path = require("path");
var app = express();
var http = require("http").Server(app);

const publicPath = path.resolve(__dirname, "../public/");

app.use(express.static(publicPath))

app.get("/", function (req, res) {
    res.send("index.html", { root: publicPath });
});

http.listen(8080, function () {
    console.log("JP App listening on *:8080");
});
