console.log("Running api-like.js");


// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our likes model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new like
  app.post("/api/like", function(req, res) 
    {
        console.log("Reggie, posting likes");
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.likes.create
        ({
          recieptTitle:  likeSearch.recipe.title,
          sourceUrl:     likeSearch.recipe.title,
          publisher:     likeSearch.recipe.publisher,
          recipeID:      likeSearch.recipe.recipe_id,
          userEmail:     DataTypes.STRING,
        }).then(function(dblikes) 
        {
          // We have access to the new likes as an argument inside of the callback function
          res.json(dblikes);
        });
        console.log("Reggie, exiting posted likes");
    }); 
};
