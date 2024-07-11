const Task = require('../models/Task')

const getTasks = async (req, res) => {
    const tasks = await Task.findAll()

    res.json(tasks)
}

const getTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findOne({
        where: {
            id
        },
        attributes: ['name', 'done']
    })
    res.json(task)
}


const createTask = async (req, res) => {
    const { name, done, projectId } = req.body
    const newTask = await Task.create({
        name: name,
        done: done,
        projectId: projectId
    })
    res.json(newTask)
}

const updateTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findOne({
        where: {
            id
        }
    })
    task.set(req.body)
    await task.save()
    res.sendStatus(204)
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    await Task.destroy({
        where: {
            id
        }
    })
    res.sendStatus(204)
}

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask }