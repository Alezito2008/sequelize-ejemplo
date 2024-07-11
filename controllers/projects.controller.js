const Project = require('../models/Project')
const Task = require('../models/Task')

const getProjects = async (req, res) => {
    const projects = await Project.findAll()

    res.json(projects)
}

const getProject = async(req, res) => {
    const { id } = req.params

    const project = await Project.findOne({
        where: {
            id: id
        }
    })

    res.json(project)
}

const createProject = async (req, res) => {
    const { name, priority, description } = req.body

    const newProject = await Project.create({
        name: name,
        description: description,
        priority: priority
    })

    res.json(newProject)
}

const updateProject = async (req, res) => {
    const { id } = req.params

    const { name, description, priority } = req.body

    await Project.update({
        name: name,
        priority: priority,
        description: description
    }, {
        where: {
            id: id
        }
    }
    )

    res.sendStatus(204)
}

const deleteProject = async (req, res) => {
    
    // const id = req.params.id
    const { id } = req.params

    try {
        await Project.destroy({
            where: {
                id: id
            }
        })
    
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProjectTasks = async (req, res) => {
    const { id } = req.params

    const tasks = await Task.findAll({
        where: {
            projectId: id
        }
    })

    res.json(tasks)
}

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject, getProjectTasks }