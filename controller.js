// Dependencies
var express = require("express");
// Import the model to use its db functions for emptypantry.js
var emptypantry = require("../models/emptypantry.js");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
// Create routes and set up logic where required.
router.get("/", function (req, res) 
 {
     emptypantry.selectAll(function(data) 
     {
        var hbsObject = 
        {
            emptypantry: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
     });
 });

// Add new emptypantry to the db.
router.post("/api/emptypantry", function (req, res)
 {
    emptypantry.insertOne
    ( 
        [ "emptypantry_name", "devoured"
        ], 
        [ req.body.emptypantry_name, 
          req.body.devoured
        ],        
        function(result) 
           {
             // Send back the ID of the new emptypantry
             res.json({ id: result.insertId });
           });
 });

// Set emptypantry devoured status to true.
router.put("/api/emptypantry/:id", function(req, res) 
  {
      var condition = "id = " + req.params.id;
      console.log("condition", condition);

       emptypantry.updateOne({ devoured: req.body.devoured }, condition, function(result) 
         {
            if (result.changedRows === 0)
               {
                  // If no rows were changed, then the ID must not exist, so 404.
                  return res.status(404).end();
               }
            else 
               {
                  res.status(200).end();
               }
         });
  });

// Delete emptypantry from db.
router.delete("/api/emptypantry/:id", function(req, res) 
  {
     var condition = "id = " + req.params.id;
     console.log("condition", condition);

     emptypantry.deleteOne(condition, function(result) 
       {
          if (result.changedRows === 0)
             {
               // If no rows were changed, then the ID must not exist, so 404.
               return res.status(404).end();
             } 
          else 
             {
                res.status(200).end();
             }
       });
  });