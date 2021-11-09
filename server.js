// Dependencies
// Express JS
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Express routes

// get root
app.get('/', (req, res) => {
	res.json({
		message: 'Hello World',
	});
});

// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});

// Open connection
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
