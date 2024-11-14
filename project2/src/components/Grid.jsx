import React from 'react';
import Cell from './Cell';

const Grid = ({ gridSize }) => {
  const { rows, cols } = gridSize;
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ isMine: Math.random() < 0.2 }))
  );

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
        <Cell key={index} isMine={cell.isMine} />
      ))}
    </div>
  );
};

export default Grid;
