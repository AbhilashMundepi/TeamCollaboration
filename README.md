# TeamCollaboration
Team Collaboration Board

A minimal Trello/Asana-like clone built with React, Node.js, Express.js, and MongoDB.
This project allows teams to manage boards, lists, and tasks with a simple and responsive UI.

Features

Create and view Boards

Create and view Lists within a Board

Add Tasks to Lists

Responsive design suitable for desktop and mobile

Minimal, intuitive UI

Backend with Node.js, Express, and MongoDB

Easy to extend (authentication, drag-and-drop, editing tasks, etc.)

Tech Stack

Frontend: React

Backend: Node.js, Express.js

Database: MongoDB

HTTP Client: Axios

Folder Structure
frontend/
├─ src/
│  ├─ pages/
│  │   ├─ Dashboard.jsx
│  │   └─ BoardPage.jsx
│  ├─ components/
│  │   ├─ BoardCard.jsx
│  │   ├─ ListColumn.jsx
│  │   └─ TaskCard.jsx
│  └─ services/
│      └─ api.js
backend/
├─ models/
│   ├─ Board.js
│   ├─ List.js
│   └─ Task.js
├─ controllers/
│   ├─ boardController.js
│   ├─ listController.js
│   └─ taskController.js
├─ routes/
│   ├─ boardRoutes.js
│   ├─ listRoutes.js
│   └─ taskRoutes.js
├─ server.js
└─ seed.js

Getting Started
1. Backend Setup
cd Backend
npm install


Create a .env file:

MONGO_URI=<your-mongodb-connection-string>
PORT=5000


Start the server:

npm start


(Optional) Seed the database with dummy data:

node seed.js

2. Frontend Setup
cd frontend
npm install
npm run dev


Open http://localhost:3000
 in your browser.

API Endpoints
Boards

GET /api/boards → Get all boards

POST /api/boards → Create a new board

Lists

GET /api/boards/:boardId/lists → Get lists by board

POST /api/boards/:boardId/lists → Create new list

Tasks

GET /api/lists/:listId/tasks → Get tasks by list

POST /api/lists/:listId/tasks → Add task to list

Future Enhancements

User authentication and team management

Drag-and-drop tasks between lists

Edit and delete tasks and lists

Real-time updates with WebSockets

Better styling with Tailwind CSS or Material UI
