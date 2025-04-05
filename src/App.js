import React, { useEffect, useState } from 'react';

const RandomError = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [color, setColor] = useState('#000');

  useEffect(() => {
    const randomPosition = () => {
      const top = Math.random() * 90;
      const left = Math.random() * 90;
      setPosition({ top: `${top}vh`, left: `${left}vw` });
    };

    const randomColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColor(randomColor);
    };

    const interval = setInterval(() => {
      randomPosition();
      randomColor();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      position: 'absolute', 
      top: position.top, 
      left: position.left, 
      color: color, 
      fontSize: '4rem',
      fontWeight: 'bold'
    }}>
      Error
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RandomError />
    </div>
  );
};

export default App;
