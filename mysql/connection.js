const mysql = require("mysql");

const pool = mysql.createPool({
	connectionLimit: 50,
<<<<<<< HEAD
	host: "localhost",
=======
	host: "35.225.218.226",
>>>>>>> 833587b1895feebd08d58b6b51f0ea641ee79d89
	user: "root",
	password: "password12345",
	database: "hackathon2"
});

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection pool...");
			this.pool = mysql.createPool({
<<<<<<< HEAD
				connectionLimit:50,
				host: "localhost",
=======
				connectionLimit: 50,
				host: "35.225.218.226",
>>>>>>> 833587b1895feebd08d58b6b51f0ea641ee79d89
				user: "root",
				password: "password12345",
				database: "hackathon2"
			});

			return this.pool;
		}

		return this.pool;
	}
}

const instance = new Connection();

module.exports = instance;

// const pool = require("./sql/connection");
