var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // app.get("/search", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/search.html"));
  // });

};