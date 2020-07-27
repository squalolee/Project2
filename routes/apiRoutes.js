var db = require("../models");

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

  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
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
      .then(function(dbUser) {
        console.log(dbUser);
        res.json(dbUser);
      });
  });

  app.post("/api/login", function(req, res) {
    res.json(req.dbUser);
  })

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.put("/api/users", function(req, res) {
    db.User.update(req.body,{
      where: {
        id: req.body.id
      }
    })
    .then(function(dbUser) {
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