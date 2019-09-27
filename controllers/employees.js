const pool = require("../mysql/connection");

const getEmployees = (req, res) => {
	pool.query("SELECT * FROM employees.employees", (err, rows) => {
		if (err) {
			console.log({ message: " Ya Done Gud! " + err });
			return res.send("Getting Employees....");
		}
		res.json(employees);
	});
};

const getEmployeesById = (req, res) => {
	pool.query("SELECT * FROM employees.employees.emp_no", (err, rows) => {
		if (err) {
			console.log({ message: " Ya Done Gud! " + err });
			return res.send("Getting Employees....");
		}
		res.json(employees);
	});
};

const getEmployeesByFirstName = (req, res) => {
	pool.query(
		"SELECT * FROM employees.first_name WHERE first_name == req.params.first_name",
		(err, rows) => {
			if (err) {
				console.log({ message: " Yins' Done Bad! " + err });
				return res.send("Getting Employees....");
			}
			res.json(employees);
		}
	);
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
