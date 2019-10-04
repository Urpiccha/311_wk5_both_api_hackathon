const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getDepts = (req, res) => {
	let sql = "SELECT ?? FROM ??";
	sql = mysql.format(sql, ["dept_name", "departments"]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getDepts };
