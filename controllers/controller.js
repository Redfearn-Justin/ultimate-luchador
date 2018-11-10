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

router.post("/api/uploadprofilepic", function(req, res) {
    var image_data;
    var accountID;
    orm.uploadProfilePic(image_data, accountID, function(result) {
            var resid = result[0].name;
            console.log(name);
        }
    );
    res.sendStatus(200); //ok
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

router.get("/api/selectSingleOpponent/:id", function (req, res) {
    orm.selectSingleOpponent(
        "players",
        req.params.id,
        function (result) {
            res.json(result);
        }
    );
});

//Last log in time update
router.put("/api/updateTime/:uid", function (req, res) {
    orm.updateOne(
        "players",
        req.params.uid,
        function (result) {
            res.json(result[0]);
        }
    );
});

// EXPORT OUR ROUTER
module.exports = router;
