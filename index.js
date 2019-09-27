const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 4001;

const employeesRoutes = require("./routes/employees");

app.use(bodyParser.json());

app.use(employeesRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to Our API");
});

app.listen(port, () => {
	console.log(`The Best Group Ever is listening on port ${port}!`);
});
