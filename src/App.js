import React, { useState } from 'react';
import './App.scss';
import useCustomFetch from './hooks/useCustomFetch';

function App() {
  const [url, setUrl] = useState('');
  const [data, loading, error] = useCustomFetch(url);
  const getFollowers = (e) => {
    if (e.key === 'Enter') {
      setUrl(`https://api.github.com/users/${e.target.value}`);
    }
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>GitId: </h1>
        <input type='text' onKeyPress={getFollowers} />
        {loading && url && <div>Loading...</div>}
        {!loading && data && data.rData && (
          <div>Followers: {data.rData.followers}</div>
        )}
        {error && <div>Error is : {error}</div>}
      </header>
    </div>
  );
}

export default App;
