import React from 'react';
import './button.css';
const Button = ({ label }) => {
  return (
    <div data-testid='button' className='button-style'>
      HI, {label}
    </div>
  );
};

export default Button;
