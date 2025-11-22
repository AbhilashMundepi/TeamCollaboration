const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/taskController');

// PUT /api/tasks/:id
router.put('/:id', taskCtrl.updateTask);

// DELETE /api/tasks/:id
router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;
