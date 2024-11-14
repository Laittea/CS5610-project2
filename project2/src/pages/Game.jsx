import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import Grid from '../components/Grid';

const Game = () => {
  const { difficulty } = useParams();
  const { gameState, setGameState } = useContext(GameContext);
  const [gridSize, setGridSize] = useState(null);
  const [key, setKey] = useState(0); // Key to force re-render of Grid when difficulty changes
  const [flagCount, setFlagCount] = useState(0); // Counter for flags

  useEffect(() => {
    // Reset game state and grid when difficulty changes
    setGameState('playing');
    setFlagCount(0); // Reset the flag count
    setKey((prevKey) => prevKey + 1); // Increment key to remount Grid component

    switch (difficulty) {
      case 'medium':
        setGridSize({ rows: 16, cols: 16, mines: 40 });
        break;
      case 'hard':
        setGridSize({ rows: 16, cols: 30, mines: 99 });
        break;
      case 'easy':
      default:
        setGridSize({ rows: 8, cols: 8, mines: 10 });
    }
  }, [difficulty, setGameState]);

  if (!gridSize) {
    return <h3>Loading...</h3>;
  }

  // Render game status message
  const renderGameStatus = () => {
    if (gameState === 'won') {
      return <h3 style={{ color: 'green' }}>Game over! You Won!</h3>;
    }
    if (gameState === 'lost') {
      return <h3 style={{ color: 'red' }}>Game over! You lost!</h3>;
    }
    return <h3>Good luck! Avoid the mines!</h3>;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Difficulty: {difficulty}</h2>
      {renderGameStatus()}
      <h3>Remaining Flags: {gridSize.mines - flagCount}</h3> {/* Flag Counter */}

      <button
        onClick={() => {
          setGameState('playing'); // Reset the game state
          setFlagCount(0); // Reset the flag count
          setKey((prevKey) => prevKey + 1); // Reset the Grid component
        }}
        style={{
          padding: '10px 20px',
          margin: '20px 0',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>
      <Grid key={key} gridSize={gridSize} setFlagCount={setFlagCount} /> {/* Pass setFlagCount */}
    </div>
  );
};

export default Game;

