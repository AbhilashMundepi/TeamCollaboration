const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/taskController');


router.put('/:id', taskCtrl.updateTask);

router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;
