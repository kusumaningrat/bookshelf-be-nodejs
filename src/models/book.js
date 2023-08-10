const Sequelize = require('sequelize');

const {
    Model, 
    STRING, INTEGER, BOOLEAN, DATE
} = Sequelize;
const sequelize = require('../commons/database');

class Book extends Model {}

Book.init(
    {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: {
            type: STRING, 
            allowNull: false
        },
        author: {
            type: STRING,
            allowNull: false
        },
        published: {
            type: BOOLEAN,
            allowNull: false
        },
        published_at: {
            type: DATE,
        },
        category_id: {
            type: INTEGER,
            allowNull: false
        }
    },
    {
        modelName: 'book',
        sequelize,
        underscored: true, 
        timestamps: false
    }
);

module.exports = Book;