import React, { useEffect, useState } from 'react';
import API from '../Services/api';
import ListColumn from '../components/ListColumn';

function BoardPage({ board, goBack }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const res = await API.get(`/boards/${board._id}/lists`);
        setLists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLists();
  }, [board]);

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={goBack}
        style={{
          marginBottom: '20px',
          padding: '8px 15px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#3498db',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        ← Back to Boards
      </button>
      <h2 style={{ marginBottom: '15px' }}>{board.name}</h2>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '20px'
        }}
      >
        {lists.map((list) => (
          <ListColumn key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
}

export default BoardPage;


