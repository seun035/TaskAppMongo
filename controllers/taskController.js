const taskServices = require('../services/taskService');

module.exports.getTasks = async (req, res, next) => {
    
    const response = await taskServices.getTasks();
    res.status(response.status).json(response)
};

module.exports.getTask = async (req, res, next) => {
    const taskId = req.params.taskId; 
    const response = await taskServices.getTask(taskId);
    res.status(response.status).json(response);
};

module.exports.createTask = async (req, res, next) => {

    const description = req.body.description;
    const title = req.body.title;
    const status = req.body.status;
    const UserId = req.userId;

    const response = await taskServices.createTask({description, title, status, UserId})
    res.status(response.status).json(response)
};

module.exports.updateTask = async (req, res, next) => {

    const taskId = req.params.taskId;
    const description = req.body.description;
    const title = req.body.title;
    const status = req.body.status;
    const UserId = req.userId;

    const response = await taskServices.updateTask({taskId, description, title, status, UserId})
    res.status(response.status).json(response)
};

module.exports.deleteTask = async (req, res, next) => {
    const taskId = req.params.taskId;
    await taskServices.deleteTask(taskId);
    res.status(200).json({data: "delete task"})
};

