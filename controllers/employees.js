const pool = require("../mysql/connection");
const mysql = require("mysql");

let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
sql = mysql.format(sql, replacements);

pool.query(sql, (err, rows) => {
	if (err) {
		console.log({ message: "Error occurred: " + err });
		return res.status(500).send("An unexpected error occured");
	}
	res.json(rows);
});

const getEmployees = (req, res) => {
	let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
	sql = mysql.format(sql, "employees");
	pool.query("SELECT * FROM employees.employees", (err, rows) => {
		if (err) {
			console.log({ message: " Ya Done Gud! " + err });
			return res.send("Getting Employees....");
		}
		res.json(employees);
	});
};

const getEmployeesById = (req, res) => {
	let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
	sql = mysql.format(sql, "employees", ":id", "id");
	pool.query("SELECT * FROM employees.employees.emp_no", (err, rows) => {
		if (err) {
			console.log({ message: " Yins' Done Bad! " + err });
			return res.send("Getting Employee Number....");
		}
		res.json(employees);
	});
};

const getEmployeesByFirstName = (req, res) => {
	let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
	sql = mysql.format(sql, replacements);
	pool.query("SELECT * FROM employees.employees.first_name", (err, rows) => {
		if (err) {
			console.log({ message: " Yins' Done Bad! " + err });
			return res.send("Getting Employee by first name....");
		}
		res.json(employees);
	});
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
