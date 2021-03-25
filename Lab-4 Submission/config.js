const mysql = require('mysql');

//Database Connection Credentials
const config = {
	host: '162.243.235.211',
	user:'user345',
	password:'Password1@',
	database:'db345',
};

//Create MySQL Pool
const pool = mysql.createPool(config);

//Export Pool
module.exports = pool;

