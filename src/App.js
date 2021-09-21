import React, { useState } from 'react';
import Menu from './layout/Menu';
import Routes from './layout/Routes';
import Footer from './layout/Footer';
import './App.css';

function App() {
	const [rotations, setRotations] = useState([]);
	return (
		<div>
			<Menu setRotations={setRotations} />
			<Routes rotations={rotations} setRotations={setRotations} />
			<Footer />
		</div>
	);
}

export default App;
