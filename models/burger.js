// Export the database function for the controlelr (burger_controller.js);
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        freezeTableName: true,

        tableName: "Burger"
    });
    return Burger
};