
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",

    //Make sure you update your own password here! 
    password: "HobGoblin93",
    //db name 
    database: "burger_db",
  });
}

//setting up connection 
connection.connect(function (err) {
  if (err) {

    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
