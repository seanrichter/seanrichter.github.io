//dependencies
var express = require("express");
var app = express();

var PORT = 8088

//data
var character = function (name, role, age, forcePoints) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.forcePoints = forcePoints;
}

var yoda = new character("yoda", "Jedi Master", 900, 2000);
var darthMaul = new character("Darth Maul", "Sith Lord", 200, 1200);
var lukeSkyWalker = new character("Luke Skywalker", "Jedi", 400, 1350);

//routes
app.get("/", function (req, res) {
    res.send("Welcome to the Star Wars Page");
});

app.get("/yoda", function (req, res) {
    res.json(yoda);
});

app.get("/darthMaul", function (req, res) {
    res.json(darthMaul);
});

app.get("/lukeSkyWalker", function (req, res) {
    res.json(lukeSkyWalker);
});

//listener
app.listen(PORT, function () {
    console.log("app listening on Port " + PORT);
}
);  // http://localhost:8088\