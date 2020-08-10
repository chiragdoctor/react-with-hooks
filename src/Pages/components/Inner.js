import React, { useContext } from 'react';
import messageContext from '../../contexts/messageContext';

const Inner = () => {
  const [message, setMessage] = useContext(messageContext);
  return (
    <div>
      <h3>Message : {message}</h3>
      <button onClick={() => setMessage(Math.random() * 1)}>Change</button>
    </div>
  );
};

export default Inner;
