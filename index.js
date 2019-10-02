const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const employeesRoutes = require('./routes/employees');

const port = process.env.PORT || 4001
;



app.use(bodyParser.json());

app.use(employeesRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to Our API");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
