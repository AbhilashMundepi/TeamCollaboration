import React from 'react';

function TaskCard({ task }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '10px',
        marginBottom: '8px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        cursor: 'grab',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <strong>{task.title}</strong>
      {task.description && <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>{task.description}</p>}
      <small>Status: {task.status || 'Pending'}</small>
    </div>
  );
}

export default TaskCard;


