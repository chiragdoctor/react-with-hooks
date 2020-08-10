import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DepositPage = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const onDepositHandle = (e) => {
    dispatch({
      type: 'DEPOSIT',
      payload: 10,
    });
  };

  return (
    <div>
      <h1>Balance : {balance}</h1>
      <button onClick={onDepositHandle}>DEPOSIT</button>
    </div>
  );
};

export default DepositPage;
