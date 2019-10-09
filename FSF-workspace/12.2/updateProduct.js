function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                flavor: "Mint chip"
            },
            {
                quantity: 100
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
        }
    )};