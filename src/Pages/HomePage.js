import React, { useContext } from 'react';
import messageContext from '../contexts/messageContext';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to home page.</h1>
      <h1>Message: {useContext(messageContext)}</h1>
    </>
  );
};

export default HomePage;
