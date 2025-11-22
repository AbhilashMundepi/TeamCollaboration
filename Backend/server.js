require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const boardsRoute = require('./routes/boards');
const listsRoute = require('./routes/lists');
const tasksRoute = require('./routes/tasks');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/boards', boardsRoute);
app.use('/lists', listsRoute);
app.use('/tasks', tasksRoute);

app.get('/', (req, res) => res.json({ ok: true, msg: 'Simple Board API' }));

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URL || 'mongodb://localhost:27017/simple_board')
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });

