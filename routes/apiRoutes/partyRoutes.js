const express = require('express');
const router = express.Router();

const db = require('../../db/connection');

// PARTIES TABLE REQUESTS

// Get parties table
router.get('/parties', (req, res) => {
	const sql = `SELECT * FROM parties;`;
	db.query(sql, (err, rows) => {
		if (err) {
			res.status(500).json({error: err.message});
			return;
		}
		res.json({
			message: 'Parties table query: Success',
			data: rows,
		});
	});
});

// Get a single party
router.get('/party/:id', (req, res) => {
	const sql = `SELECT * FROM parties
  WHERE id = ?`;
	const params = [req.params.id];

	db.query(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({error: err.message});
			return;
		}
		res.json({
			message: 'Query party row: Success',
			data: row,
		});
	});
});

// Delete a party
router.delete('/party/:id', (req, res) => {
	const sql = `DELETE FROM parties WHERE id = ?`;
	const params = req.params.id;

	db.query(sql, params, (err, result) => {
		if (err) {
			res.status(400).json({error: err.message});
			return;
		} else if (!result.affectedRows) {
			res.json({
				message: 'Party not found',
			});
		} else {
			res.json({
				message: 'deleted',
				changes: result.affectedRows,
				id: req.params.id,
			});
		}
	});
});

module.exports = router;
