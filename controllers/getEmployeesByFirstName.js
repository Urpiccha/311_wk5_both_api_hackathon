const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployeesByFirstName = (req, res) => {
	let sql = "SELECT * FROM ?? WHERE ?? = ? ";
	sql = mysql.format(sql, ["employees", "first_name", req.params.first_name]);

	pool.query(sql, (err, _rows) => {
		if (err) return handleSQLError(res, err);
		res.json(rows);
	});
};

module.exports = { getEmployeesByFirstName };
