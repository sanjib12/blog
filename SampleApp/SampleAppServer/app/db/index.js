var mysql      = require('promise-mysql');
var config     = require("./../../config");
var connection;

connection = mysql.createConnection({
    host: config.dbConfig.host,
    user: config.dbConfig.user,
    password: config.dbConfig.password,
    database: config.dbConfig.dbName  
});

module.exports = connection;
