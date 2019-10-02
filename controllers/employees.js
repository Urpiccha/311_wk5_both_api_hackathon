const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require('../mysql/error');


const getEmployees = (req, res) => {
	let sql = " SELECT * FROM ?? LIMIT ?"
	//let replacements = {'employees'}
	sql = mysql.format(sql, ["employees", 50])
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res,err)
	       return res.json(rows);
	})
};

const getEmployeesById = (req, res) => {
	let sql = "SELECT * FROM ?? WHERE ?? = ? "
	
	sql = mysql.format(sql, ["employees", "emp_no", req.params.id])

	pool.query(sql, (err,rows) => {
		if (err) return handleSQLError(res, err)
		return res.json(rows);
	})
};

// const getEmployeesByFirstName = (req, res) => {
// 	pool.query(
// 		"SELECT * FROM employees.firstname/:first_name WHERE first_name == req.params.first_name",
// 		(err, _rows) => {
// 			if (err) {
// 				console.log({ message: " Yins' Done Bad! " + err });
// 				return res.send("Getting Employees....");
// 			}
// 			res.json(employees);
// 		}
// 	);
// };

module.exports = { getEmployees, getEmployeesById };
//getEmployeesByFirstName