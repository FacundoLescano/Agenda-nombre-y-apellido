const mysql = require("mysql");

const myconnection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: ""
});

myconnection.connect((error) => {
    if (error) {
        console.log("ha ocurrido un error menso", error)
    } else {
        console.log("conectado a la base de datos")
    }
})

module.exports = myconnection;
