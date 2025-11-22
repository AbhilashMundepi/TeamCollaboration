import React, { useEffect, useState } from 'react';
import API from '../Services/api';
import TaskCard from './TaskCard';

function ListColumn({ list }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get(`/lists/${list._id}/tasks`);
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, [list]);

  const handleAddTask = async () => {
    if (!newTask) return;
    try {
      const res = await API.post(`/lists/${list._id}/tasks`, {
        boardId: list.boardId,
        title: newTask
      });
      setTasks([...tasks, res.data]);
      setNewTask('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#f4f5f7',
        padding: '15px',
        borderRadius: '10px',
        minWidth: '250px',
        flexShrink: 0,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>{list.title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          width: '100%',
          marginTop: '10px',
          padding: '6px 10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          marginTop: '5px',
          width: '100%',
          padding: '8px 0',
          backgroundColor: '#2ecc71',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default ListColumn;


