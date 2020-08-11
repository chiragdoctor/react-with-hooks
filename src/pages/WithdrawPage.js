import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';

const WithdrawPage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
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
      <button class='button-style' onClick={onDepositHandle}>
        WITHDRAW
      </button>
      <h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
    </div>
  );
};

export default WithdrawPage;
