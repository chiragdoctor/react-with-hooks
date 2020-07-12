import React, { useState } from 'react';
import NameTag from './components/NameTag';
import './App.scss';

const initialNames = [
	{ firstName: 'peter', lastName: 'peterson' },
	{ firstName: 'john', lastName: 'johnson' },
	{ firstName: 'jill', lastName: 'jillson' },
	{ firstName: 'john', lastName: 'johnson' },
];
function App() {
	const [names, setNames] = useState(initialNames);
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='title'>Name List</h1>
				{names.map((v, i) => {
					return <NameTag key={`${v.firstName}${v.lastName}`} firstName={v.firstName} lastName={v.lastName} />;
				})}
			</header>
		</div>
	);
}

export default App;
