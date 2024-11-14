import React, { useState, useEffect, useContext } from 'react';
import Cell from './Cell';
import { GameContext } from '../context/GameContext';
import './Grid.css';

const Grid = ({ gridSize, setFlagCount }) => {
  const { rows, cols, mines } = gridSize;
  const { setGameState } = useContext(GameContext);
  const [grid, setGrid] = useState([]);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isMine: false,
        nearbyMines: 0,
        revealed: false,
      }))
    );

    let placedMines = 0;
    while (placedMines < mines) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (!newGrid[row][col].isMine) {
        newGrid[row][col].isMine = true;
        placedMines++;
      }
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!newGrid[r][c].isMine) {
          newGrid[r][c].nearbyMines = calculateNearbyMines(newGrid, r, c);
        }
      }
    }

    setGrid(newGrid);
  }, [rows, cols, mines]);

  const calculateNearbyMines = (grid, row, col) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];

    let count = 0;
    directions.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol].isMine
      ) {
        count++;
      }
    });

    return count;
  };

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${cols}, 30px)` }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isMine={cell.isMine}
            nearbyMines={cell.nearbyMines}
            revealed={cell.revealed}
            onReveal={() => handleReveal(rowIndex, colIndex)}
            setFlagCount={setFlagCount}
          />
        ))
      )}
    </div>
  );
};

export default Grid;


