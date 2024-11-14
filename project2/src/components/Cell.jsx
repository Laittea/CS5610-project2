import React, { useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Cell = ({ isMine, nearbyMines, revealed, onReveal, setFlagCount }) => {
  const [state, setState] = useState('unselected'); // 'unselected', 'safe', 'mine', 'flag'
  const { gameState, setGameState } = useContext(GameContext);

  const handleClick = (event) => {
    if (gameState !== 'playing') return;

    if (event.shiftKey || event.type === 'contextmenu') {
      event.preventDefault();
      toggleFlag();
    } else if (state === 'unselected') {
      if (isMine) {
        setState('mine');
        setGameState('lost'); 
      } else {
        setState('safe');
        onReveal(); 
      }
    }
  };

  const toggleFlag = () => {
    if (state === 'flag') {
      setState('unselected');
      setFlagCount((prev) => prev - 1); 
    } else if (state === 'unselected') {
      setState('flag');
      setFlagCount((prev) => prev + 1); 
    }
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: state === 'unselected' ? '#ccc' : state === 'mine' ? 'red' : '#88cc88',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: gameState === 'playing' ? 'pointer' : 'not-allowed', // Disable cursor when game is over
        color: '#000',
        fontWeight: 'bold',
      }}
    >
      {state === 'safe' && nearbyMines > 0 ? nearbyMines : ''}
      {state === 'mine' && '💣'}
      {state === 'flag' && '🚩'}
    </div>
  );
};

export default Cell;

