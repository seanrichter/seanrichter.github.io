var Sequelize = require("sequelize");

var sequelize = new Sequelize("authors_test", "root", "Guitarsmr1014Stella",
    {
        host: "localhost",
        prot: 3306,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

module.exports = sequelize;

