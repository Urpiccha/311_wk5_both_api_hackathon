const pool = mysql.createPool({
	connectionLimit: 100,
	host: "localhost",
	user: "root",
	password: "password12345",
	database: "admin"
});

const mysql = require("mysql");

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection pool...");
			this.pool = mysql.createPool({
				connectionLimit: 100,
				host: "localhost",
				user: "root",
				password: "password12345",
				database: "admin"
			});

			return this.pool;
		}

		return this.pool;
	}
}

const instance = new Connection();

module.exports = instance;

// THIS GOES INTO FILES TO CALL THIS FILE
// NOT NEEDED HERE BUT I PASTED IT SO WE CAN FIND   // IT EASILY

// const pool = require('./sql/connection');
