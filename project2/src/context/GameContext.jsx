import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState('playing'); // 'playing', 'won', or 'lost'

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
