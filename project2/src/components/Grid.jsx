import React, { useState, useEffect, useContext } from 'react';
import Cell from './Cell';
import { GameContext } from '../context/GameContext';

const Grid = ({ gridSize }) => {
  const { rows, cols, mines } = gridSize;
  const { setGameState } = useContext(GameContext);
  const [grid, setGrid] = useState([]);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    //the logic of initialize the grid
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isMine: false,
        nearbyMines: 0,
        revealed: false,
      }))
    );
    //reandomly place the mine in the grid
    let placedMines = 0;
    while (placedMines < mines) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (!newGrid[row][col].isMine) {
        newGrid[row][col].isMine = true;
        placedMines++;
      }
    }
    calculateAllNearbyMines(newGrid);
    setGrid(newGrid);
  }, [rows, cols, mines]);

  const calculateAllNearbyMines = (grid) => {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!grid[r][c].isMine) {
          grid[r][c].nearbyMines = calculateNearbyMines(grid, r, c);
        }
      }
    }
  };
  //this logic of counting nearby mines was borrowed from video
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
  //like nearby mines, this also
  const revealCells = (row, col) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];

    const queue = [[row, col]];
    const newGrid = [...grid];

    while (queue.length > 0) {
      const [currentRow, currentCol] = queue.shift();
      const cell = newGrid[currentRow][currentCol];
        //if it is not revealed yet, mark as revealed
      if (!cell.revealed) {
        cell.revealed = true;
        setRevealedCount((prev) => prev + 1);

        if (cell.nearbyMines === 0) {
          directions.forEach(([dx, dy]) => {
            const newRow = currentRow + dx;
            const newCol = currentCol + dy;

            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < cols &&
              !newGrid[newRow][newCol].revealed
            ) {
              queue.push([newRow, newCol]);
            }
          });
        }
      }
    }

    setGrid(newGrid);
  };

  const handleReveal = (row, col) => {
    const cell = grid[row][col];

    if (cell.isMine) {
      grid[row][col].revealed = true; 
      setGameState('lost');
    } else {
      if (cell.nearbyMines === 0) {
        revealCells(row, col); 
      } else {
        cell.revealed = true;
        setRevealedCount((prev) => prev + 1);
        setGrid([...grid]);
      }
    }
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
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isMine={cell.isMine}
            nearbyMines={cell.nearbyMines}
            revealed={cell.revealed}
            onReveal={() => handleReveal(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
