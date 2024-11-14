import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../components/Grid';

const Game = () => {
  const { difficulty } = useParams();
  const [gridSize, setGridSize] = useState({ rows: 8, cols: 8, mines: 10 });

  useEffect(() => {
    switch (difficulty) {
      case 'medium':
        setGridSize({ rows: 16, cols: 16, mines: 40 });
        break;
      case 'hard':
        setGridSize({ rows: 16, cols: 30, mines: 99 });
        break;
      default:
        setGridSize({ rows: 8, cols: 8, mines: 10 });
    }
  }, [difficulty]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Difficulty: {difficulty}</h2>
      <button onClick={() => window.location.reload()}>Reset</button>
      <Grid gridSize={gridSize} />
    </div>
  );
};

export default Game;
