// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Emptypantry.findAll({}).then(function(dbEmptypantry) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbusers);
    });
  });

  // POST route for saving a new Emptypantry
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Emptypantry.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbEmptypantry) {
      // We have access to the new Emptypantry as an argument inside of the callback function
      res.json(dbEmptypantry);
    });
  });

  // DELETE route for deleting users. We can get the id of the Emptypantry to be deleted from
  // req.params.id
  app.delete("/api/users/:id", function(req, res) {
    // We just have to specify which Emptypantry we want to destroy with "where"
    db.Emptypantry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmptypantry) {
      res.json(dbEmptypantry);
    });

  });

  // PUT route for updating users. We can get the updated Emptypantry data from req.body
  app.put("/api/users", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Emptypantry.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbEmptypantry) {
      res.json(dbEmptypantry);
    });
  });

};