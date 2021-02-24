const express = require("express");
const app = express();
const myconnection = require("./database.js")

app.set("view engine", "ejs")
app.set("views", "view")
app.use(express.urlencoded({extended: false}))

app.get("/", async (req, res) => {
	await myconnection.query("SELECT nombre, apellido FROM probando", (error, result) => {
		res.render("index.ejs", {
			consulta: result
		})
	})
})

app.post("/enviado", (req, res) => {
	const {nombre, apellido} = req.body;
	myconnection.query("insert into probando (nombre, apellido) values (?, ?)", [nombre, apellido],  (error, result) => {
		res.redirect("/")
	})
})

app.listen(8080, () => {
	console.log("8080")
})
