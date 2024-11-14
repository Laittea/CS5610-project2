import React, { useState } from 'react';

const Cell = ({ isMine, adjacentMines, onReveal }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
      onReveal(isMine);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: revealed ? (isMine ? 'red' : '#4CAF50') : '#87CEEB',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: revealed ? (isMine ? 'white' : 'lime') : 'transparent',
      }}
    >
      {revealed && !isMine && (adjacentMines > 0 ? adjacentMines : '')}
      {revealed && isMine && '💣'}
    </div>
  );
};

export default Cell;
