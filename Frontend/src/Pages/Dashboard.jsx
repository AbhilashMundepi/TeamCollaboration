import React, { useEffect, useState } from 'react';
import API from '../Services/api';
import BoardPage from './BoardPage';
import BoardCard from '../Components/BoardCard';

function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await API.get('/boards');
        setBoards(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBoards();
  }, []);

  if (selectedBoard) {
    return <BoardPage board={selectedBoard} goBack={() => setSelectedBoard(null)} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Boards</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}
      >
        {boards.map((board) => (
          <BoardCard key={board._id} board={board} onClick={() => setSelectedBoard(board)} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

