import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const WithdrawPage = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const onDepositHandle = (e) => {
    dispatch({
      type: 'WITHDRAW',
      payload: 10,
    });
  };

  return (
    <div>
      <h1>Balance : {balance}</h1>
      <button onClick={onDepositHandle}>WITHDRAW</button>
    </div>
  );
};

export default WithdrawPage;
