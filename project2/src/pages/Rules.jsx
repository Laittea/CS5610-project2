import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <div className="rules-container">
      <h2 className="rules-title">📜 How to Play Minesweeper 📜</h2>
      <p className="rules-intro">
        Minesweeper is a simple but famous video game where 💣 “mines” are randomly placed
        around a board. Your goal is to use your 🧠 logic and some luck 🍀 to determine where the mines are hidden!
      </p>
      <h3 className="rules-heading">🕹️ The Basics</h3>
      <ul className="rules-list">
        <li>🔲 A game of Minesweeper is set on a grid made up of cells, with a number of mines randomly placed on the board.</li>
        <li>🎯 To win, find all the safe spaces on the board that DO NOT have mines.</li>
        <li>🖱️ Use your mouse to click on the grid squares.</li>
        <li>🚩 Right-click or hold Shift and click to place a flag where you think a mine is located.</li>
      </ul>
      <h3 className="rules-heading">📖 What Happens When You Click?</h3>
      <ul className="rules-list">
        <li>
          <strong>🟢 A number:</strong> Indicates the number of cells around (vertically, horizontally, or diagonally) the selected cell that contain mines.
        </li>
        <li>
          <strong>💣 A bomb:</strong> You clicked on a mine! The game ends with a "Game over! You lost!" message. 😢
        </li>
        <li>🟡 A blank cell (0): No bombs are adjacent to this cell. Keep exploring! 🚀</li>
      </ul>
      <h3 className="rules-heading">🏆 Winning the Game</h3>
      <p>
        When you have revealed ALL of the empty squares, you’ll see this message: 
        <strong> “Game over! You Won!” 🎉</strong>
      </p>
      <h3 className="rules-heading">🔄 Reset the Game</h3>
      <p>
        At the top of the screen, click the <strong>Reset</strong> button 🔃 to start a new game. The mines will be randomized, and the game board will reset.
      </p>
      <h3 className="rules-heading">⚙️ Difficulty Levels</h3>
      <p>
        From the header, you can choose from 3 levels of difficulty, each with different rules and board sizes:
      </p>
      <ul className="rules-list">
        <li>🟩 <strong>Easy:</strong> 8 x 8 grid with 10 mines.</li>
        <li>🟨 <strong>Medium:</strong> 16 x 16 grid with 40 mines.</li>
        <li>🟥 <strong>Hard:</strong> 30 x 16 grid with 99 mines.</li>
      </ul>
    </div>
  );
};

export default Rules;

