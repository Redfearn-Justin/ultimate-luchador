// Require and set up an instance of express
var importConnect = require("./config/connection.js");
var express = require("express");
var app = express();

// Body parser middleware
var bodyParser = require("body-parser");

//update to db
const battleToken;

//create query
UPDATE `players` SET `` = null;

UPDATE `databasename`.`tablename` 
SET fieldB = fieldB + 1 
WHERE fieldA = '2';

var sqlQuery;

var queryString = "SELECT * FROM " + tableName + " ORDER BY " + stat + " DESC LIMIT 10;";

connection.query(queryString, function (err, res) {

    if (err) throw err;

    cb(res);
});