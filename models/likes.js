
module.exports = function(sequelize, type) {
  var Like = sequelize.define('likes', {
      L_title: type.STRING,
      L_source_url: type.STRING,
      L_image_url: type.STRING,
      l_like_Email: type.STRING,  
  }, {
      freezeTableName: true
  });
  Like.associate = function(models) {
      Like.belongsTo(models.Users, {
          foreignKey: {
              allowNull: false
          },
          foreignKey: "userEmail"
      });
  };
  return Like;
}