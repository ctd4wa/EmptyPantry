module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Users", {
      // Giving the User model a name of type STRING
      userEmail: DataTypes.STRING
    }, {
        freezeTableName: true
    });
  
    User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.likes, {
        onDelete: "cascade"
      });
      User.hasMany(models.saveForLater, {
        onDelete: "cascade"
      })
    };
  
    return User;
  };
  