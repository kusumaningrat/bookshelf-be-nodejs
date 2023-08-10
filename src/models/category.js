const Sequelize = require('sequelize');
const {
    Model,
    INTEGER,
    STRING
} = Sequelize;

const sequelize = require('../commons/database');

const Book = require('./book');

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

Category.hasMany(Book, {
    foreignKey: 'category_id',
    as: 'book'
});
Book.belongsTo(Category, {
    foreignKey: 'category_id',
})

module.exports = Category;

