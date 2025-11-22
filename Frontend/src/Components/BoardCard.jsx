import React from 'react';

function BoardCard({ board, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '20px',
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#fefefe',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h3>{board.name}</h3>
    </div>
  );
}

export default BoardCard;

