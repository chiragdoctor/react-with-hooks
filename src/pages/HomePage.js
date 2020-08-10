import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <>
      <h1>Home Page</h1>
      <h2>Balance: {balance}</h2>
    </>
  );
};

export default HomePage;
