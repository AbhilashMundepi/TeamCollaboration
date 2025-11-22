const express = require('express');
const router = express.Router();
const boardCtrl = require('../controllers/boardController');
const listCtrl = require('../controllers/listController');

// GET /api/boards
router.get('/', boardCtrl.getBoards);

// POST /api/boards
router.post('/', boardCtrl.createBoard);

// GET /api/boards/:id
router.get('/:id', boardCtrl.getBoardById);

// GET /api/boards/:id/lists
router.get('/:id/lists', listCtrl.getListsByBoard);

// POST /api/boards/:id/lists
router.post('/:id/lists', listCtrl.createList);

// (optional) delete board
router.delete('/:id', boardCtrl.deleteBoard);

module.exports = router;
