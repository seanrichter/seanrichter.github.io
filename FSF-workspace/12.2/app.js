var mysql = require("mysql");

var connectionObject = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guitarsmr1014Stella",
    database: "animals_db"
};

var connection = mysql.createConnection(connectionObject);

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
}
);