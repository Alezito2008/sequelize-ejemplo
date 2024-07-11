const { Sequelize } = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize('prueba', 'root', process.env.MYSQL_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
