const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');



router.post('/sign-in', authController.signIn);

router.post('/register', authController.register);

// router.post('/create', taskController.createTask);

// router.delete('/:taskId', taskController.deleteTask);

module.exports.authRoutes = router;