import React, { useContext } from 'react';
import Inner from './Inner';
import messageContext from '../../contexts/messageContext';
const Outer = () => {
  return (
    <div>
      <h2>Message :{useContext(messageContext)[0]}</h2>
      <Inner />
    </div>
  );
};

export default Outer;
