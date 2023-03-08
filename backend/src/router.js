const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/taskController');
const tasksMiddlewares = require('./middlewares/tasksMiddlewares');

const validateController = require('./controllers/validateController');
const validateMiddlewares = require('./middlewares/validateMiddlewares');

router.post(
  '/login',
  validateController.validateUser
);

router.get('/tasks', validateMiddlewares.validadeToken, tasksController.getAll);
router.post('/tasks', tasksMiddlewares.validateTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  tasksMiddlewares.validateTitle, 
  tasksMiddlewares.validateStatus,
  tasksController.updateTask
);

module.exports = router;