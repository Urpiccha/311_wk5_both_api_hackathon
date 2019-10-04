const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployees = (req, res) => {
	let sql = "SELECT * FROM ?? LIMIT ?";
	sql = mysql.format(sql, ["employees", 50]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getEmployees };
