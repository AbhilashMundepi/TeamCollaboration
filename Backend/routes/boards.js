const express = require('express');
const router = express.Router();
const boardCtrl = require('../controllers/boardController');
const listCtrl = require('../controllers/listController');


router.get('/', boardCtrl.getBoards);


router.post('/', boardCtrl.createBoard);


router.get('/:id', boardCtrl.getBoardById);


router.get('/:id/lists', listCtrl.getListsByBoard);


router.post('/:id/lists', listCtrl.createList);


router.delete('/:id', boardCtrl.deleteBoard);

module.exports = router;
