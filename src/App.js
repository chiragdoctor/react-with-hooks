import React, { useState } from 'react';
import './App.scss';

function App() {
	const [age, setAge] = useState(21);

	const ageUpHandle = () => {
		setAge(age + 1);
	};

	const ageDownHandle = () => {
		setAge(age - 1);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Use State Hook</h1>
				<h2>Age: {age}</h2>
				<button onClick={ageUpHandle}>Age +</button>
				<button onClick={ageDownHandle}>Age -</button>
			</header>
		</div>
	);
}

export default App;
