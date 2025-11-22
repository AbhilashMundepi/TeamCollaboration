const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/taskController');
const listCtrl = require('../controllers/listController');


router.get('/:id/tasks', taskCtrl.getTasksByList);


router.post('/:id/tasks', taskCtrl.createTask);


router.delete('/:id', listCtrl.deleteList);

module.exports = router;
