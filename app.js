const express = require('express')
const projectsRoutes = require('./routes/projects.routes')
const tasksRoutes = require('./routes/tasks.routes')

const app = express()

app.use(express.json())

app.use(projectsRoutes)
app.use(tasksRoutes)

module.exports = app