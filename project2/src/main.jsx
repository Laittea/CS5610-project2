import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import GameProvider from './context/GameContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
