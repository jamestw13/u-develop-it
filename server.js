// DEPENDENCIES
// Express JS
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

// inputCheck
const inputCheck = require('./utils/inputCheck');

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});

// Open connection
db.connect(err => {
	if (err) throw err;
	console.log('Database connected.');

	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
