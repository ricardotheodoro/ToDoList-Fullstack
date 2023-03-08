const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/taskController');
const tasksMiddlewares = require('./middlewares/tasksMiddlewares');

const validateController = require('./controllers/validateController');

router.post(
  '/login',
  validateController.validateUser
);

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddlewares.validateTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  tasksMiddlewares.validateTitle, 
  tasksMiddlewares.validateStatus,
  tasksController.updateTask
);

module.exports = router;