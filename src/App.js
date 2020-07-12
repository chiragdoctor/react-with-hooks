import React, { useState, useEffect } from 'react';
import './App.scss';

const initialProfile = {
  followers: null,
  publicRepos: null,
};

function App() {
  const [profile, setProfile] = useState(initialProfile);

  const getProfile = async () => {
    const response = await fetch('https://api.github.com/users/chiragdoctor');
    const json = await response.json();
    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Fetch Data</h1>
        {`Followers: ${profile.followers} Public Repos: ${profile.publicRepos}`}
      </header>
    </div>
  );
}

export default App;
