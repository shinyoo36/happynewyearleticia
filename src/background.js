// Background.js
import React from 'react';

const Background = () => {
  const backgroundStyle = {
    backgroundImage: `url('./leti.png')`, // Update the path to your 'leti.png' file
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return <div style={backgroundStyle}></div>;
};

export default Background;
