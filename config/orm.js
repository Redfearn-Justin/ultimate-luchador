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

    //Create/Connect account to SQL DB
    //====================================
    insertOne: (id, created, last_login, char_name, cb) => {
        var queryString = "INSERT INTO players (id, created, last_login, char_name)" + " VALUES (?) "
        connection.query(queryString, [id, created, last_login, char_name], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

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

    selectLuchador: (tableName, token, cb) => {
        var queryString = "SELECT * FROM " + tableName + " WHERE ?";
        connection.query(queryString, {token: token}, function (err, res) {
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
    },

    updateExpFame: (tableName, fame, exp, wins, losses, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {fame: fame, exp: exp, wins: wins, losses: losses}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    levelUp: (tableName, lvl, hp, exp, tickets_max, refresh, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {lvl: lvl, hp: hp, exp: exp, tickets: tickets_max, tickets_max: tickets_max, refresh: refresh}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    useTicket: (tableName, tickets, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {tickets: tickets}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    useRefresh: (tableName, refresh, tickets, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {refresh: refresh, tickets: tickets}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    newAbility1: (tableName, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_color, ab1_icon, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {ab1_name: ab1_name, ab1_dlow: ab1_dlow, ab1_dhigh: ab1_dhigh, ab1_speed: ab1_speed, ab1_crit: ab1_crit, ab1_color: ab1_color, ab1_icon: ab1_icon}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    newAbility2: (tableName, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_color, ab2_icon, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {ab2_name: ab2_name, ab2_dlow: ab2_dlow, ab2_dhigh: ab2_dhigh, ab2_speed: ab2_speed, ab2_crit: ab2_crit, ab2_color: ab2_color, ab2_icon: ab2_icon}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    newAbility3: (tableName, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_color, ab3_icon, id, cb) => {
        var queryString = "UPDATE " + tableName + " SET ? WHERE id = " + id;
        connection.query(queryString, {ab3_name: ab3_name, ab3_dlow: ab3_dlow, ab3_dhigh: ab3_dhigh, ab3_speed: ab3_speed, ab3_crit: ab3_crit, ab3_color: ab3_color, ab3_icon: ab3_icon}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    //Create/Connect account to SQL DB
    //====================================
    createAccount: (tableName, token, char_name, cb) => {
        var queryString = `INSERT INTO ${tableName} SET ?`;
        console.log(queryString);
        connection.query(queryString, {token: token, char_name: char_name}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    //last login time update test method -- Currently not functional
    //=================================
    updateOne: (tableName, id, last_login, cb) => {
        var queryString = `UPDATE ${tableName} SET ? WHERE id = ${id}`;
        connection.query(queryString, {last_login: last_login}, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

};
// =============================

// Export the orm object
module.exports = orm;