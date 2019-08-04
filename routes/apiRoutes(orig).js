var db = require("../models");

module.exports = function(app) {

 // index route loads view.html
 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
});

/*
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  */

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get('*',function (req, res) {
    res.redirect('main.html');
});
};
