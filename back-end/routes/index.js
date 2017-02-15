var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../Config/config.js');

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})


connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getHomeAuctions', (req, res, next)=>{
	var auctionsQuery = 

		"SELECT * FROM auctions " + 
		"INNER JOIN images ON images.auction_id = auctions.id "
		+ " limit 10";

	connection.query(auctionsQuery, (error, results, fields)=>{
		if (error) throw error;
		res.json(results);
	})
	
})

module.exports = router;
