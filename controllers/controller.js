// Require models.js file
var orm = require('../config/orm.js');

// Require express and build our router instance
var express = require("express");
var router = express.Router();

// API ROUTES 
// *************************************************

router.get("/api/selectone", function (req, res) {
    orm.selectOne(
        "players",
        1,
        function (result) {
            var resid = result[0].id;
            console.log(resid);
            res.json({ id: resid });
        }
    );
});

// EXPORT OUR ROUTER
module.exports = router;
