import React, { useContext } from 'react';
import messageContext from '../contexts/messageContext';
import Outer from './components/Outer';

const AboutPage = () => {
  const [message] = useContext(messageContext);
  return (
    <>
      <h1>Welcome to about page.</h1>
      <h1>Message: {message}</h1>
      <Outer />
    </>
  );
};

export default AboutPage;
