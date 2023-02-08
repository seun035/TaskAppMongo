// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../connection');

// const Task = sequelize.define('Task', {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: DataTypes.STRING(200),
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     status: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//     },
//     dateCreated: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     lastModifiedDate: {
//         type: DataTypes.DATE,
//         allowNull: true
//     }
// }, {
//     timestamps: false
// });

// module.exports = Task;