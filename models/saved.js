
module.exports = (sequelize, type) => {
    var Saved = sequelize.define('saveForLater', {
        S_title: type.STRING,
        S_source_url: type.STRING,
        S_image_url: type.STRING,
        S_userEmail: type.STRING,  
    }, {
        freezeTableName: true
    });
    Saved.associate = function(models) {
        Saved.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Saved;
}