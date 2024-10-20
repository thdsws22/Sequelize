module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Account', {
        value: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        tableName: 'accounts',
        timestamps: false,
    });

    model.associate = models => {
        model.belongsTo(models.Branch, { foreignKey: 'branch_id' });
        model.belongsToMany(models.Customers, { through: models.Owns ,
        foreignKey:'account_id'
        }); // Reference models.Customers
    }

    return model;
}
