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

router.get("/api/selectLuchador/:uid", function (req, res) {
    orm.selectLuchador(
        "players",
        req.params.uid,
        function (result) {
            res.json(result[0]);
        }
    );
});

router.get("/api/selectOpponents/:dlow/:dhigh", function (req, res) {
    orm.selectOpponents(
        "players",
        req.params.dlow,
        req.params.dhigh,
        function (result) {
            res.json(result);
        }
    );
});

// EXPORT OUR ROUTER
module.exports = router;
