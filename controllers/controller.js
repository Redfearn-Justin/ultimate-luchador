// Require models.js file
var models = require('../models/models.js');

// Require express and build our router instance
var express = require("express");
var router = express.Router();

// API ROUTES 
// *************************************************

router.post("/api/newchar", function (req, res) {
    models.create([
        'captain_name',
        'ship_name'
    ], [
            req.body.captain_name,
            req.body.ship_name
        ], function (result) {
            var resid = result.insertId;
            idHolder = resid;
            res.json({ id: resid });
        });
});

// EXPORT OUR ROUTER
module.exports = router;
