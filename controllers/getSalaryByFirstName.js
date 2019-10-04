const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getSalaryByFirstName = (req, res) => {
	let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? WHERE ?? = ? LIMIT ?";
	sql = mysql.format(sql, [
		"empolyees.first_name",
		"employees.last_name",
		"salaries.salary",
		"employees",
		"salaries",
		"employees.first_name",
		req.params.first_name,
		50
	]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getSalaryByFirstName };
