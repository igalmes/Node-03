require('dotenv').config()

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DD_PASS,
    database: process.env.DB_NAME,
});

connection.connect(error => {
    if (error) { throw error }
});

// connection.query('SELECT id, nombre FROM producto', (error, results) => {
//     if (error) { throw error }

//     console.log(results);
// });

//si alquien requiere mi modulo se hace un:
module.exports = connection;