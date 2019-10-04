const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getDeptsByEmpId = (req, res) => {
	let sql =
		"SELECT ??, ??, ??, ?? FROM ?? INNER JOIN ?? ON ?? = ?? INNER JOIN ?? ON ?? = ?? WHERE ?? = ?";
	sql = mysql.format(sql, [
		"employees.first_name",
		"employees.last_name",
		"dept_emp.from_date",
		"employees",
		"dept_emp",
		"employees.emp_no",
		"dept_emp.emp_no",
		"departments",
		"dept_emp.dept_no",
		"departments.dept_no",
		"employees.emp_no",
		req.params.id
	]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getDeptsByEmpId };
