const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const employeesRouter = require("./routes/employees");
const salariesRouter = require("./routes/salaries");
const departmentsRouter = require("./routes/departments");
const titlesRouter = require("./routes/titles");

const port = process.env.PORT || 4002;

app.use(bodyParser.json());
app.use(employeesRouter);
app.use(salariesRouter);
app.use(departmentsRouter);
app.use(titlesRouter);

app.get("/", (req, res) => {
	res.send("Welcome to Our API");
});

app.listen(port, () => {
	console.log(`The Best Group Ever is listening on port ${port}!`);
});
