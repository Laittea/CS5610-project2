import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
      <Link to="/rules" style={{ margin: '0 10px', color: '#fff' }}>Rules</Link>
      <Link to="/game/easy" style={{ margin: '0 10px', color: '#fff' }}>Easy</Link>
      <Link to="/game/medium" style={{ margin: '0 10px', color: '#fff' }}>Medium</Link>
      <Link to="/game/hard" style={{ margin: '0 10px', color: '#fff' }}>Hard</Link>
    </nav>
  );
};

export default Header;
