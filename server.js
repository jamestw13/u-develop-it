// DEPENDENCIES
// Express JS
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// MySQL2
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to SQL database
const db = mysql.createConnection(
	{
		host: 'localhost',
		// You MySQL username
		user: 'root',
		// Your MySQL password
		password: 'Max8mumEffort',
		database: 'election',
	},
	console.log('Connected to the election database.')
);

// Express routes

// get root
app.get('/', (req, res) => {
	res.json({
		message: 'Hello World',
	});
});

// // Select all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
// 	console.log(rows);
// });

// // Select candidate with id 1
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, rows) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(rows);
// });

// // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(result);
// });

// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});

// Open connection
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
