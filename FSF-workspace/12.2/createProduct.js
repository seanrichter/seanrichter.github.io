
var mysql = require("mysql");

var connectionObject = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guitarsmr1014Stella",
    database: "icecream_db"
};


function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: "Rocky Road",
        price: 3.0,
        quantity: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
      }
    );
    // logs the actual query being run
    console.log(query.sql);
  };
  