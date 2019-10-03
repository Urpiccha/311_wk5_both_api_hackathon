const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getAllTitles = (req, res) => {
	let sql = "SELECT DISTINCT ?? FROM ??";
	sql = mysql.format(sql, ["title", "titles"]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getAllTitles };
