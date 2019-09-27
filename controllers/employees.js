<<<<<<< HEAD
const pool = require('./sql/connection');

// const getEmployees = (req,res) => {

//     res.send("getting Employees....");
// };

// const getEmployeesById =

// const getEmployeesByFirstName =


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
=======
const pool = require("../mysql/connection");

const getEmployees = (req, res) => {
	pool.query("SELECT * FROM employees", (err, rows) => {
		if (err) {
			console.log({ message: " Ya Done Gud! " + err });
			return res.send("Getting Employees....");
		}
		res.json(employees);
	});
};

const getEmployeesById = (req, res) => {
	pool.query("SELECT * FROM employees.id", (err, rows) => {
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
>>>>>>> 833587b1895feebd08d58b6b51f0ea641ee79d89
