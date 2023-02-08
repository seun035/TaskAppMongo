//const Task = require('../database/models/task');
//const User = require('../database/models/user');

module.exports.getTasks = async () => {
    //const tasks = await Task.findAll();
    return {status: 200, message: 'success', data: {tasks: tasks}};;
}

module.exports.getTask = async (taskId) => {
    const task = await Task.findByPk(taskId); 
    return {status: 200, message: 'success', data: {task: task}};
}

module.exports.createTask = async ({description, title, status, UserId}) => {
    const task = await Task.create({description, title, status, dateCreated: Date.now(), lastModifiedDate: Date.now(), UserId});
    return {status: 200, message: 'success', data: {id: task.id}};
}

module.exports.updateTask = async ({taskId, description, title, status, UserId}) => {
    let task = await Task.findByPk(taskId);
    let shouldUpdate = false;

    if (!task) {
       return  {status: 404, message: 'resourse not found', data: {}}
    }

    if (task.description !== description) {
       task.description = description;
       shouldUpdate = true;
    }

    if (task.title !== title ) {
        task.title = title;
        shouldUpdate = true;
    }

    if (task.status !== status) {
        task.status = status;
        shouldUpdate = true;
    }

    if (!shouldUpdate) {
        return;
    }

    task.lastModifiedDate = Date.now();
    console.log(task);
    await Task.update(task, {
        where: {
          id: task.id
        }
      });
    await task.save();
    return {status: 200, message: 'success', data: {id: task.id}};
}

module.exports.deleteTask = async (taskId) => {
    const task = await Task.findByPk(taskId);
    if (!task) {
        
    }

    await task.destroy();
}