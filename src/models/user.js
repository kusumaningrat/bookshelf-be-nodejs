const Sequezlie = require('sequelize');

const {
    Model, INTEGER, STRING, ENUM
} = Sequezlie;

const sequelize = require('../commons/database');  
const { UserRoles } = require('../commons/constants');

class User extends Model {}

User.init(
    {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: STRING, 
            allowNull: false,
            unique: true
        },
        password: {
            type: STRING,
            allowNull: false
        },
        level: {
            type: ENUM(UserRoles.Admin, UserRoles.User),
            defaultValue: UserRoles.User
        }
    },
    {
        modelName: 'user',
        sequelize,
        underscored: true,
        timestamps: false
    }
);

module.exports = User;