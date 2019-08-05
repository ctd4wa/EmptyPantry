console.log("Inside likes.js (Model)");


module.exports = function(sequelize, DataTypes) {
    var likes = sequelize.define("likes", {
        recieptTitle:  DataTypes.STRING,
        sourceUrl:     DataTypes.STRING,
        publisher:     DataTypes.STRING,
        recipeID:      DataTypes.STRING,
        userEmail:     DataTypes.STRING,
    });
    return likes;
  };