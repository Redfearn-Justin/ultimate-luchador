// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax - formats "?" better: ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
};

// ORM Object with MySQL methods
// =============================
var orm = {

    //last login time update test method
    //=================================
    updateOne: (tableName, id, cb) => {
        var queryString = "UPDATE last_login " + tableName + " WHERE id = " + id;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    selectOne: (tableName, id, cb) => {
        var queryString = "SELECT * FROM " + tableName + " WHERE id = " + id;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    selectLuchador: (tableName, uid, cb) => {
        var queryString = "SELECT * FROM " + tableName + " WHERE token = " + uid;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    selectOpponents: (tableName, dlow, dhigh, cb) => {
        var queryString = "SELECT char_name, id, lvl, fame, wins, losses, profile_pic FROM " + tableName + " WHERE fame BETWEEN " + dlow + " and " +dhigh;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    selectSingleOpponent: (tableName, id, cb) => {
        var queryString = "SELECT * FROM " + tableName + " WHERE id = " + id;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }

};
// =============================

// Export the orm object
module.exports = orm;