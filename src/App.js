import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <ul className='ul-style'>
            <li className='li-style'>
              <NavLink className='App-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='li-style'>
              <NavLink className='App-link' to='/deposit'>
                Deposit
              </NavLink>
            </li>
            <li className='li-style'>
              <NavLink className='App-link' to='/withdraw'>
                Withdraw
              </NavLink>
            </li>
          </ul>
          <Route exact path='/' component={HomePage} />

          <Route exact path='/deposit' component={DepositPage} />

          <Route exact path='/withdraw' component={WithdrawPage} />
        </header>
      </div>
    </Router>
  );
}

export default App;
