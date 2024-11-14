import React from 'react';

const Rules = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>How to Play Minesweeper</h2>
      <p>1. Click on a square to reveal what’s beneath it.</p>
      <p>2. Numbers indicate how many mines are adjacent to that square.</p>
      <p>3. Avoid clicking on mines to win the game!</p>
      <p>4. Use logic to determine safe squares and flag mines.</p>
    </div>
  );
};

export default Rules;
