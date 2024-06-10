import React from 'react';
import './Button.css';

const Button = ({ handleClick, value }) => {
  return (
    <button className="button" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
