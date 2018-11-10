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
//=================================================
router.put("/api/updateTime", function (req, res) {
    orm.updateOne(
        "players",
        req.body.uid,
        function (result) {
            res.json(result[0]);
        }
    );
});

//create account in SQL DB
//====================================================
router.post("/api/createAccount", function (req, res) {
    orm.insertOne(
        req.body.uid,
        req.body.created,
        req.body.last_login,
        req.body.char_name,
        function (result) {
            res.json(result[0]);
        }
    );
});


router.put("/api/updateExpFame", function (req, res) {
    orm.updateExpFame(
        "players",
        req.body.fame,
        req.body.exp,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/levelUp", function (req, res) {
    orm.levelUp(
        "players",
        req.body.lvl,
        req.body.hp,
        req.body.exp,
        req.body.tickets_max,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

// EXPORT OUR ROUTER
module.exports = router;
