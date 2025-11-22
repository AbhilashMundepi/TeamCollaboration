require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');

const boardsRoute = require('./routes/boards');
const listsRoute = require('./routes/lists');
const tasksRoute = require('./routes/tasks');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/boards', boardsRoute);
app.use('/lists', listsRoute);
app.use('/tasks', tasksRoute);


const frontendPath = path.join(__dirname, '../Frontend/dist'); // Vite build folder
app.use(express.static(frontendPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URL || 'mongodb://localhost:27017/simple_board')
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });


