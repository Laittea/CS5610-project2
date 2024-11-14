import React, { useState, useEffect, useContext } from 'react';
import Cell from './Cell';
import { GameContext } from '../context/GameContext';

const Grid = ({ gridSize, setFlagCount }) => {
  const { rows, cols, mines } = gridSize;
  const { setGameState } = useContext(GameContext);
  const [grid, setGrid] = useState([]);
  const [revealedCount, setRevealedCount] = useState(0); // Track revealed cells

  useEffect(() => {
    // Initialize grid with mines
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ isMine: false, nearbyMines: 0, revealed: false }))
    );

    // Randomly place mines
    let placedMines = 0;
    while (placedMines < mines) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (!newGrid[row][col].isMine) {
        newGrid[row][col].isMine = true;
        placedMines++;
      }
    }

    // Calculate nearby mines for each cell
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!newGrid[r][c].isMine) {
          newGrid[r][c].nearbyMines = calculateNearbyMines(newGrid, r, c, rows, cols);
        }
      }
    }

    setGrid(newGrid);
  }, [rows, cols, mines]);

  useEffect(() => {
    // Check if all non-mine cells are revealed
    const totalCells = rows * cols;
    const nonMineCells = totalCells - mines;

    if (revealedCount === nonMineCells) {
      setGameState('won');
    }
  }, [revealedCount, rows, cols, mines, setGameState]);

  const calculateNearbyMines = (grid, row, col, rows, cols) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    let count = 0;
    directions.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol].isMine) {
        count++;
      }
    });

    return count;
  };

  const handleReveal = () => {
    setRevealedCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 30px)`,
        gap: '2px',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      {grid.flat().map((cell, index) => (
        <Cell
          key={index}
          isMine={cell.isMine}
          nearbyMines={cell.nearbyMines}
          revealed={cell.revealed}
          onReveal={handleReveal}
          setFlagCount={setFlagCount} // Pass setFlagCount to Cell
        />
      ))}
    </div>
  );
};

export default Grid;
