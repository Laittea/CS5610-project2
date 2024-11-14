import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [color, setColor] = useState('#007bff'); 


  const colors = ['#007bff', '#28a745', '#ffc107', '#dc3545', '#6c757d'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, [colors]);

  return (
    <div className="home-container">
      <h1 className="home-title" style={{ color: color }}>
        Welcome to Minesweeper! 🎉
      </h1>
      <p className="home-description">
        Ready to test your logic and luck? Select a difficulty level above to start playing! 💣
      </p>
      <p className="home-rules">
        Not sure how to play? Check out the Rules page 📜 for a quick guide!
      </p>
      <p className="home-emoji">😃 Good luck and have fun! 🎮</p>
    </div>
  );
};

export default Home;
