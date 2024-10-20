module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Customers', {
        name: {
            type: DataTypes.STRING(40)
        },
        age: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'Customers',
        timestamps: false,
    });

    model.associate = models => {
        model.belongsToMany(models.Account, { through: models.Owns,
        foreignKey: 'customer_id'
         });
    };

    return model;
}
