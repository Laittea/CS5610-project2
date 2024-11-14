import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>
        Created by Your Name | Minesweeper Clone | &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

export default Footer;
