// creation of a controller function
const Task=require('../models/Task')
const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    // 201 for succesful request
    res.status(201).json({task})
}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req, res) => {
    res.send('delete task')
}


// exporting as an object
module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}