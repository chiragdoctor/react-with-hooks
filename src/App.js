import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage';
import MessageContext from './contexts/messageContext';
import HomePage from './Pages/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(0);
  const [message, setMessage] = useState('I am being shared');

  const onClickHandler = () => {
    setLoggedIn(!loggedIn);
  };

  const onChangeHandle = (e) => {
    setAge(e.target.value);
  };
  return (
    <Router>
      <MessageContext.Provider value={[message, setMessage]}>
        <div className='App'>
          <header className='App-header'>
            <ul className='ui-style'>
              <li className='li-style'>
                <NavLink
                  className='App-link'
                  to='/'
                  exact
                  activeClassName='Link-active-style'
                >
                  Home
                </NavLink>
              </li>
              <li className='li-style'>
                <NavLink
                  className='App-link'
                  to='/about'
                  exact
                  activeClassName='Link-active-style'
                >
                  About
                </NavLink>
              </li>

              <li className='li-style'>
                <NavLink
                  className='App-link'
                  to='/user/chirag/doctor'
                  exact
                  activeClassName='Link-active-style'
                >
                  User Chirag doctor
                </NavLink>
              </li>
            </ul>
            <Prompt
              when={loggedIn && age <= 0}
              message={(location) => {
                return location.pathname.startsWith('/user')
                  ? true
                  : 'Are you sure?';
              }}
            ></Prompt>
            <button className='button' onClick={onClickHandler}>
              {loggedIn ? 'LOGOUT' : 'LOGIN'}
            </button>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={AboutPage} />
            <Route
              path='/user/:firstname/:lastname'
              exact
              render={({ match }) => {
                return loggedIn ? (
                  <div>
                    <h2>Age : {age}</h2>

                    <input type='text' onChange={onChangeHandle} value={age} />
                    <h1>
                      Welcome {match.params.firstname} {match.params.lastname}
                    </h1>
                  </div>
                ) : (
                  <Redirect to='/' />
                );
              }}
            />
          </header>
        </div>
      </MessageContext.Provider>
    </Router>
  );
}

export default App;
