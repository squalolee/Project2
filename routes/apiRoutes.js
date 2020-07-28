var db = require("../models");
var Sequelize = require("sequelize");


var queryURL = "https://api.petfinder.com/v2/type=?&location=?&gender=?&age=?";
// https://api.petfinder.com/v2/type=?&location=?&gender=?&age=?
// https://api.petfinder.com/v2/dog/us/pa/shavertown/female/young



module.exports = function (app) {
  // Get all examples
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  // // Create a new example
  app.post("/api/new", function (req, res) {
    db.User.create({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass
    })
      .then(function (dbUser) {
        console.log(dbUser);
        res.json(dbUser);
      });
  });
    
    app.post("/api/search/", function(req, res) {
      console.log(req.body);
      var searchInput = req.params.input;
      console.log(req.params.input);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 358c526... edit search.js and apiroutes; now saves to database AND displays in console
      db.Search.create({
        pet: req.body.pet,
        gender: req.body.gender,
        age: req.body.age,
        location: req.body.location
      })
      .then(function(dbSearch) {
        console.log(dbSearch);
        res.json(dbSearch);
      });
<<<<<<< HEAD

<<<<<<< HEAD
=======
  app.post("/api/search", function(req, res) {
=======
  app.post("/api/search/", function(req, res) {
>>>>>>> 8c996b0... fixing apiroute to get error out of consol
    console.log(req.body);
    var searchInput = req.params.input;
    console.log(req.params.input);
=======
>>>>>>> 358c526... edit search.js and apiroutes; now saves to database AND displays in console

    });


<<<<<<< HEAD
  // Delete an example by id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function (dbUser) {
      res.json(dbUser);
>>>>>>> 0c7f3e6... reorganizing
    });


    // Delete an example by id
    app.delete("/api/users/:id", function (req, res) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

=======
    // Delete an example by id
    app.delete("/api/users/:id", function (req, res) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

>>>>>>> 358c526... edit search.js and apiroutes; now saves to database AND displays in console
    app.put("/api/users", function (req, res) {
      db.User.update(req.body, {
        where: {
          id: req.body.id
        }
      })
        .then(function (dbUser) {
          res.json(dbUser);
        });
    });


    // app.get("/api/new", function (req, res) {
    //   var user = req.body;

    //   NewUser.create({
    //     uname: user.uname,
    //     email: user.email,
    //     pass: user.pass
    //   });

    // });
  };
