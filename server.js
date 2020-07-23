// require("dotenv").config();
// var express = require("express");
// var exphbs = require("express-handlebars");

// var db = require("db");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // Middleware
// //should extended be true or false? 
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// // Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// // var syncOptions = { force: false };

// // // If running a test, set syncOptions.force to true
// // // clearing the `testdb`
// // if (process.env.NODE_ENV === "test") {
// //   syncOptions.force = true;
// // }

// // // Starting the server, syncing our models ------------------------------------/
// // db.sequelize.sync(syncOptions).then(function() {
// //   app.listen(PORT, function() {
// //     console.log(
// //       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
// //       PORT,
// //       PORT
// //     );
// //   });
// // });

// // module.exports = app;

// app.listen(PORT, function() {
//   console.log("----------------------------------------------")
//   console.log("App listening on PORT " + PORT);
// });
// // });

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("----------------------------------------------")
    console.log("App listening on PORT " + PORT);
  });
});
