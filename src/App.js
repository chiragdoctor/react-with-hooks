import React, { useState } from 'react';
import './App.scss';
import usePrevious from './hooks/usePrevious';

function App() {
  const [age, setAge] = useState(21);
  const previousAge = usePrevious(age);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Use Previous: Custom Hook</h1>
        <h2>Current Age: {age}</h2>
        <h2>Previous Age: {previousAge}</h2>
        <button onClick={() => setAge(age - 1)}>Make me younger</button>
      </header>
    </div>
  );
}

export default App;
