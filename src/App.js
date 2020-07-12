import React, { useState, useMemo } from 'react';
import './App.scss';
import Child from './components/Child';
function App() {
  const [i, setI] = useState(0);

  const onClickHandler = () => {
    setI(i + 1);
  };

  const memoChild = useMemo(() => <Child></Child>, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Use Memo</h1>
        <h2>{`i : ${i} `}</h2>
        <button onClick={onClickHandler}>Increment I</button>
        <h3>Normal Component</h3>
        <Child></Child>
        <h3>Memo Component</h3>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
