const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require('../mysql/error');


const getEmployees = (req, res) => {
	let sql = " SELECT * FROM ?? LIMIT ?"
	
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
	});
};

const getEmployeesByFirstName = (req, res) => {
	let sql = " SELECT * FROM ?? WHERE ?? = ?";

	sql = mysql.format(sql, ["employees", "first_name", req.param.first_name])

	pool.query(sql, (err,rows) => {
		if (err) return handleSQLError(res, err)
		return res.json(rows);
	});
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
