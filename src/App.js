import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Route
            path='/'
            exact
            render={() => {
              return <h1>Welcome to Home Page</h1>;
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
