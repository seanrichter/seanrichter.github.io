var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guitarsmr1014Stella",
    database: "greatbay_db"
})

connection.connect(function (err) {
    console.log("Connected as id: " + connection.threadId);
    start();
})

var start = function () {
    inquirer.prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
    }).then(function (answer) {
        if (answer.postOrBid.toUpperCase() == "POST") {
            postAuction();
        } else {
            bidAuction();
        }
    })
}

var postAuction = function () {
    inquirer.prompt([{
        name: "item",
        type: "input",
        message: "What is the item you wish to submit?"
    }, {
        name: "category",
        type: "input",
        message: "What category would you like to place it in?"
    }, {
        name: "startingBid",
        type: "input",
        message: "What would you like the starting bid to be?",
        validate: function (value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function (answer) {
        connection.query("INSERT INTO auctions SET ?", {
            itemname: answer.item,
            category: answer.category,
            startingbid: answer.startingBid,
            highestbid: answer.startingBid
        }, function (err, res) {
            console.log("Your auction was created successfully!");
            start();
        })
    })
}

var bidAuction = function () {
    connection.query("SELECT * FROM auctions", function (err, res) {
        console.log(res);
        inquirer.prompt({
            name: "choice",
            type: "rawlist",
            choices: function (value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].itemname);
                }
                return choiceArray;
            },
            message: "What auction would you like to place a bid on?"
        }).then(function (answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].itemname == answer.choice) {
                    inquirer.prompt({
                        name: "bid",
                        type: "input",
                        message: "How much would you like to bid?",
                        validate: function (value) {
                            if (isNaN(value) == false) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }).then(function (answer) {
                        if (chosenItem.highestbid < parseInt(answer.bid)) {
                            connection.query("UPDATE auctions SET? WHERE ? ", [{
                                highestbid: answer.bid
                            }, {
                                id: chosenItem.id
                            }], function (err, res) {
                                console.log("Bid Successfull placed!");
                                start();
                            });
                        } else {
                            console.log("Your bid was too low.  Try again...");
                            start();
                        }
                    })
                }
            }
        })
    })
};