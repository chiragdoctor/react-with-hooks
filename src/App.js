import React, { useReducer } from 'react';
import './App.scss';

const initialState = {
  count: 0,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 };
    case 'DEC':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const plusOne = () => {
    dispatch({
      type: 'INC',
    });
  };
  const minusOne = () => {
    dispatch({
      type: 'DEC',
    });
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Use Reduder Example</h2>
        <h3>Count : {state.count}</h3>
        <button onClick={plusOne}>+1</button>
        <button onClick={minusOne}>-1</button>
      </header>
    </div>
  );
}

export default App;
