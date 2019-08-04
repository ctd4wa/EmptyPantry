module.exports = function(sequelize, DataTypes) {
    var svlaters = sequelize.define("svlaters", {
        recieptTitle:  DataTypes.STRING,
        sourceUrl:     DataTypes.STRING,
        publisher:     DataTypes.STRING,
        recipeID:      DataTypes.STRING,
        userEmail:     DataTypes.STRING,
    });
    return svlaters;
  };