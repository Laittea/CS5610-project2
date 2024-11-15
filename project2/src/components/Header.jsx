import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink to="/rules" className={({ isActive }) => isActive ? 'active' : ''}>
        Rules
      </NavLink>
      <NavLink to="/game/easy" className={({ isActive }) => isActive ? 'active' : ''}>
        Easy
      </NavLink>
      <NavLink to="/game/medium" className={({ isActive }) => isActive ? 'active' : ''}>
        Medium
      </NavLink>
      <NavLink to="/game/hard" className={({ isActive }) => isActive ? 'active' : ''}>
        Hard
      </NavLink>
    </nav>
  );
};

export default Header;
