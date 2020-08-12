import React from 'react';
import '../styles/common.scss';
import './Button.scss';

/**
 * @deprecated Don't use this button after 2019.
 *
 * @author [Chirag Doctor]
 *
 */

const Button = ({ children, type, onClick = () => {} }) => {
  let localClass = '';

  if (type === 'primary') {
    localClass = 'primary';
  }
  if (type === 'disabled') {
    localClass = 'disabled';
  }
  const cls = `bgYellow fontBlack pad8 width100 radius15 ${localClass}`.trim();
  return (
    <div className='btnClass'>
      <button onClick={onClick} className={cls}>
        {children}
      </button>
    </div>
  );
};

export default Button;
