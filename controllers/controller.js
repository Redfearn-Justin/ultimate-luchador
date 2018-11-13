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

router.put("/api/updateExpFame", function (req, res) {
    orm.updateExpFame(
        "players",
        req.body.fame,
        req.body.exp,
        req.body.wins,
        req.body.losses,
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
        req.body.refresh,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/useTicket", function (req, res) {
    orm.useTicket(
        "players",
        req.body.tickets,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/useRefresh", function (req, res) {
    orm.useRefresh(
        "players",
        req.body.refresh,
        req.body.tickets,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/changePicture", function (req, res) {
    orm.changePicture(
        "players",
        req.body.profile_pic,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/newAbility1", function (req, res) {
    orm.newAbility1(
        "players",
        req.body.ab1_name,
        req.body.ab1_dlow,
        req.body.ab1_dhigh,
        req.body.ab1_speed,
        req.body.ab1_crit,
        req.body.ab1_color,
        req.body.ab1_icon,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/newAbility2", function (req, res) {
    orm.newAbility2(
        "players",
        req.body.ab2_name,
        req.body.ab2_dlow,
        req.body.ab2_dhigh,
        req.body.ab2_speed,
        req.body.ab2_crit,
        req.body.ab2_color,
        req.body.ab2_icon,
        req.body.id,
        function (result) {
            res.json(result);
        }
    );
});

router.put("/api/newAbility3", function (req, res) {
    orm.newAbility3(
        "players",
        req.body.ab3_name,
        req.body.ab3_dlow,
        req.body.ab3_dhigh,
        req.body.ab3_speed,
        req.body.ab3_crit,
        req.body.ab3_color,
        req.body.ab3_icon,
        req.body.id,
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
    orm.createAccount(
        "players",
        req.body.token,
        req.body.created,
        req.body.last_login,
        req.body.char_name,
        function (result) {
            res.json(result[0]);
        }
    );
});

// EXPORT OUR ROUTER
module.exports = router;
