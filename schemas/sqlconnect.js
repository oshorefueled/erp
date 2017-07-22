'use strict';

var mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "bubble28",
    database: "ERP"
});

module.exports = pool;

