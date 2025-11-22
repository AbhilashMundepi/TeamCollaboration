const List = require('../models/List');
const Task = require('../models/Task');

exports.createList = async (req, res) => {
  try {
    const { id: boardId } = req.params;
    const { title, order } = req.body;
    if (!title || !title.trim()) return res.status(400).json({ error: 'Title required' });
    const list = await List.create({ boardId, title: title.trim(), order: order || 0 });
    res.status(201).json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getListsByBoard = async (req, res) => {
  try {
    const { id: boardId } = req.params;
    const lists = await List.find({ boardId }).sort({ order: 1, createdAt: 1 });
    res.json(lists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const { id } = req.params; // list id
    const list = await List.findById(id);
    if (!list) return res.status(404).json({ error: 'List not found' });
    await Task.deleteMany({ listId: list._id });
    await list.deleteOne();
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
