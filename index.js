const express = require('express')
const cors = require('cors')
const app = require('./app')

const sequelize = require('./database/database')

const PORT = 5000

async function main() {
    try {
        await sequelize.sync({ force: false })
        console.log('Conectado a la DB')
        app.listen(PORT)
        console.log(`Server corriendo en el puerto ${PORT}`)
    } catch (err) {
        throw err
        console.log('Error al conectarse a la DB')
    }
}

main()

module.exports = { sequelize }