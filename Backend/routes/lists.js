const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/taskController');
const listCtrl = require('../controllers/listController');

// GET /api/lists/:id/tasks
router.get('/:id/tasks', taskCtrl.getTasksByList);

// POST /api/lists/:id/tasks
router.post('/:id/tasks', taskCtrl.createTask);

// DELETE /api/lists/:id
router.delete('/:id', listCtrl.deleteList);

module.exports = router;
