var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var Author = sequelize.define("author",
    {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING
    }
);


Author.sync();

module.exports = Author;