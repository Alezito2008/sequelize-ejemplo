const { Router } = require('express')
const { getProjects, createProject, updateProject, deleteProject, getProject, getProjectTasks } = require('../controllers/projects.controller')

const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id', getProject)
router.get('/projects/:id/tasks', getProjectTasks)

module.exports = router