// MySQL2
const mysql = require('mysql2');

// Connect to SQL database
const db = mysql.createConnection({
	host: 'localhost',
	// You MySQL username
	user: 'root',
	// Your MySQL password
	password: 'Max8mumEffort',
	database: 'election',
});

module.exports = db;
