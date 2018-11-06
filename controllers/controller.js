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
    console.log("here we are->",req.params);
    orm.selectLuchador(
        "players",
        req.params.uid,
        function (result) {
            var resid = result[0].id;
            console.log(resid);
            res.json({ id: resid });
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

// EXPORT OUR ROUTER
module.exports = router;
