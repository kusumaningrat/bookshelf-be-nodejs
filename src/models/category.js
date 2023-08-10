const Sequelize = require('sequelize');
const {
    Model,
    INTEGER,
    STRING
} = Sequelize;

const sequelize = require('../commons/database');

class Category extends Model {}

Category.init(
    {
        id: {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: {
            type: STRING,
            allowNull: false
        }
    }, {
        modelName: 'category',
        sequelize,
        underscored: true,
        timestamps: false
    }
);

module.exports = Category;

