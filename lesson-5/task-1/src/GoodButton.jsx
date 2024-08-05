import React from 'react';
import './fancy.scss';

const GoodButton = () => {
  return (
    <button className="fancy-button" onClick={() => alert('Good job!')}>
      Good Button
    </button>
  );
};

export default GoodButton;