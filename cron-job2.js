// Require and set up an instance of express
var connection = require("./config/connection.js");

function updateTicket2() {

   //check any player whos last login was atleast a week ago and whos npc = 1, then their fame gets -10
   connection.query(
       "UPDATE players SET fame = fame - 10 WHERE npc = 1 AND fame > 10 AND last_login < NOW() - INTERVAL 1 WEEK",
       function (err, res) {
           if (err) throw err;

           connection.end();
       });

};

updateTicket2();