const mysql = require("mysql");

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection pool...");
			this.pool = mysql.createPool({
				connectionLimit: 50,
				host: "35.225.218.226",
				user: "root",
				password: "password12345",
				database: "employees"
			});

			return this.pool;
		}

		return this.pool;
	}
}

const instance = new Connection();

module.exports = instance;

// const pool = require("./sql/connection");
