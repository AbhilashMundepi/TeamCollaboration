require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db');

const Board = require('./models/Board');
const List = require('./models/List');
const Task = require('./models/Task');

const MONGO_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/simple_board';

const seed = async () => {
  try {
    await connectDB(MONGO_URI);

    // Clear existing
    // await Task.deleteMany({});
    // await List.deleteMany({});
    // await Board.deleteMany({});

    // Create boards
    const board1 = await Board.create({ name: 'Product Launch' });
    const board2 = await Board.create({ name: 'Personal' });

    // Create lists for board1
    const todo = await List.create({ boardId: board1._id, title: 'To Do', order: 0 });
    const doing = await List.create({ boardId: board1._id, title: 'In Progress', order: 1 });
    const done = await List.create({ boardId: board1._id, title: 'Done', order: 2 });

    // Create lists for board2
    const pTodo = await List.create({ boardId: board2._id, title: 'Ideas', order: 0 });
    const pDone = await List.create({ boardId: board2._id, title: 'Completed', order: 1 });

    // Create tasks for board1 lists
    await Task.create({
      boardId: board1._id,
      listId: todo._id,
      title: 'Define MVP',
      description: 'Decide minimal features for launch.',
      status: 'todo',
      priority: 'high',
      assignedTo: 'Dhanu',
      dueDate: new Date(Date.now() + 7 * 24 * 3600 * 1000)
    });

    await Task.create({
      boardId: board1._id,
      listId: doing._id,
      title: 'Design landing page',
      description: 'Hero section + CTA',
      status: 'in-progress',
      priority: 'medium',
      assignedTo: 'Abhilash',
      dueDate: new Date(Date.now() + 3 * 24 * 3600 * 1000)
    });

    await Task.create({
      boardId: board1._id,
      listId: done._id,
      title: 'Set up repo',
      description: 'Initialize git and CI',
      status: 'done',
      priority: 'low',
      assignedTo: 'You',
      dueDate: null
    });

    // Tasks for personal board
    await Task.create({
      boardId: board2._id,
      listId: pTodo._id,
      title: 'Buy groceries',
      description: 'Milk, eggs, vegetables',
      status: 'todo',
      priority: 'low',
      assignedTo: 'Self'
    });

    console.log('Seed data inserted successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

seed();
