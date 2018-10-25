// Requiring the orm object
var orm = require('../config/orm.js');

// create the object methods that will call the ORM functions
var models = {

    selectTen: function (stat, cb) {
        orm.selectTen("table_name", stat, function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.insertOne("table_name", cols, vals, function (res) {
            cb(res);
        });
    },

};

// Export the database functions for the controller
module.exports = models;