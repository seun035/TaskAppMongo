// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../connection');

// const User = sequelize.define('User', {
//     id: {
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//         type: DataTypes.INTEGER
//     },
//     email: {
//         type: DataTypes.STRING(200),
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     createdDate: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     lastModifiedDate: {
//         type: DataTypes.DATE,
//         allowNull: true
//     },
//     indexes: [
//         {
//             unique: true,
//             fields: ['email']
//         }
//     ]
// },
//     {
//         timestamps: false
//     });

// module.exports = User;