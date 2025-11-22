const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { id: listId } = req.params;
    const { boardId, title, description = '', status = 'todo', priority = 'low', assignedTo = '', dueDate = null } = req.body;

    if (!title || !title.trim()) return res.status(400).json({ error: 'Title required' });
    if (!boardId) return res.status(400).json({ error: 'boardId required in body' });

    const task = await Task.create({
      boardId,
      listId,
      title: title.trim(),
      description: description.trim(),
      status,
      priority,
      assignedTo: assignedTo.trim(),
      dueDate: dueDate ? new Date(dueDate) : null
    });

    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getTasksByList = async (req, res) => {
  try {
    const { id: listId } = req.params;
    const tasks = await Task.find({ listId }).sort({ createdAt: 1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = {};
    const allowed = ['title', 'description', 'status', 'priority', 'assignedTo', 'dueDate', 'listId', 'boardId'];
    for (const key of allowed) {
      if (req.body[key] !== undefined) {
        updates[key] = req.body[key];
      }
    }
    if (updates.title) updates.title = updates.title.trim();
    if (updates.description) updates.description = updates.description.trim();
    if (updates.assignedTo) updates.assignedTo = updates.assignedTo.trim();
    if (updates.dueDate) updates.dueDate = updates.dueDate ? new Date(updates.dueDate) : null;

    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    await task.deleteOne();
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
