import React, { useState, useLayoutEffect, useRef } from 'react';
import './App.scss';

function useDim(valEl, val) {
  const [dim, setDim] = useState({ height: 0, width: 0 });
  useLayoutEffect(() => {
    const boundingBox = valEl.current.getBoundingClientRect();
    setDim({
      height: boundingBox.height,
      width: boundingBox.width,
    });
  }, [val]);
  return dim;
}

function App() {
  const [val, setVal] = useState(2);
  const valEl = useRef(null);
  const { height, width } = useDim(valEl, val);
  return (
    <div className='App'>
      <header className='App-header'>
        <div ref={valEl}>{val}</div>
        <h1>
          Height: {height} Width: {width}
        </h1>
        <button onClick={() => setVal(val * 10)}>10*</button>
      </header>
    </div>
  );
}

export default App;
