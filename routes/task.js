const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/is-auth');
const taskController = require('../controllers/taskController');


router.get('/', isAuth, taskController.getTasks);

router.get('/:taskId', isAuth, taskController.getTask);

router.post('/create', isAuth, taskController.createTask);

router.put('/:taskId', isAuth, taskController.updateTask);

router.delete('/:taskId', isAuth, taskController.deleteTask);

module.exports.taskRoutes = router;