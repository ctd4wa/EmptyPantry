var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.likes.findAll({}).then(function(likes) {
      res.sendFile("./views/layouts/main.html", {
        msg: "Welcome!",
        examples: likes
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbEmptypantry) {
      res.sendFile("main.html", {
        example: dbEmptypantry
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  app.get('*',function (req, res) {
    res.redirect('main.html');
});
};
