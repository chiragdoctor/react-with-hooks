import React from 'react';
import './App.scss';
import Button from './components/Button/Button';

function App() {
  const onClickPrimary = () => {
    alert('Primary button clicked');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Button type='primary' onClick={onClickPrimary}>
          Click Me!!
        </Button>
        <Button type='disabled'>Click Me!!</Button>
      </header>
    </div>
  );
}

export default App;
