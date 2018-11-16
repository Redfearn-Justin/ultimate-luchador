// Require and set up an instance of express
var connection = require("./config/connection.js");

function updateTicket() {
    // Every 10 minutes, give the player another ticket
    // updates columm in db with query
    connection.query(
        "UPDATE players SET tickets = tickets + 1 where tickets_max > tickets",
        function (err, res) {
            if (err) throw err;

            // //iterates every player
            // for (var i = 0; i < res.length; i++) {
            //     ticket++;
            //     console.log(res[i].id + " | " + res[i].created + " | " + res[i].last_login);
            // }

            connection.end();
        });
};

updateTicket();
