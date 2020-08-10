import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.scss';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <ul>
            <li>
              <NavLink
                className='app-link'
                to='/'
                exact
                activeClassName='link-active-style'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app-link'
                to='/about'
                exact
                activeClassName='link-active-style'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app-link'
                to='/user/chirag/doctor'
                exact
                activeClassName='link-active-style'
              >
                User Chirag doctor
              </NavLink>
            </li>
          </ul>
          <Route
            path='/'
            exact
            render={() => {
              return <h1> Welcome to home page </h1>;
            }}
          />
          <Route path='/about' exact component={AboutPage} />
          <Route
            path='/user/:firstname/:lastname'
            exact
            render={({ match }) => {
              return (
                <h1>
                  {' '}
                  Welcome {match.params.firstname} {match.params.lastname}
                </h1>
              );
            }}
          />
        </header>
      </div>
    </Router>
  );
}

export default App;
