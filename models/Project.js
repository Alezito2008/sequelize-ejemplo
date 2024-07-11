const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
const Task = require('./Task')

const Project = sequelize.define('Projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.TINYINT,
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetKey: 'id'
})

module.exports = Project
