function deleteProduct() {
    connection.query(
      "DELETE FROM products WHERE ?",
      {
        flavor: "Mint chip"
      },
      function(err, res) {
        console.log(res.affectedRows + " products deleted!\n");
      }
    );
  }
 
