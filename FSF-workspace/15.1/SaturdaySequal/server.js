var Author = require("./models/author.js");

console.log("hurray!");

Author.create(
    {
        firstName: "Earnest",
        lastName: "Hemmingway"

    }).then(function (results) {
        console.log("inserted author!");
    });