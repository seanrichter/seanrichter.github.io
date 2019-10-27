var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(8085);

app.get("/second", function (req, res) {
    res.render("second");
});

app.get("/third/:keyword", function (req, res) {
    console.log(req.params);
    var myParameter = req.params.keyword;
    console.log(myParameter);
});

switch (myParameter) {
    case ""
}