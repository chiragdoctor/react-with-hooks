import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HomePage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onClickhandler = () => {
    dispatch({
      type: 'APPLY',
    });
  };

  return (
    <>
      <h1>Home Page</h1>
      <h2>Balance: {balance}</h2>
      <h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
      <button class='button-style' disabled={loan} onClick={onClickhandler}>
        {loan ? 'Loan Applied' : 'Apply for Loan'}
      </button>
    </>
  );
};

export default HomePage;
