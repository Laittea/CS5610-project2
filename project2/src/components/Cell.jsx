import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Cell = ({ isMine, nearbyMines, revealed, onReveal }) => {
  const { gameState } = useContext(GameContext);

  const handleClick = (event) => {
    //prevent from clicking the game once it is over
    if (gameState !== 'playing') return;

    if (!revealed) {
      onReveal();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: revealed
          ? isMine
            ? 'red'
            : '#88cc88'
          : '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: gameState === 'playing' ? 'pointer' : 'not-allowed',
        color: revealed ? (isMine ? '#000' : '#000') : 'transparent',
        fontWeight: 'bold',
      }}
    >
      {revealed && isMine ? '💣' : revealed && nearbyMines > 0 ? nearbyMines : ''}
    </div>
  );
};

export default Cell;
