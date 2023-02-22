import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
	const [cantidad, setCantidad] = useState(0);

	const handleSubmit = e => {
		e.preventDefault();

		setCantidad(cantidad + 1);
	};
	return (
		<div>
			<NavBar cantidad={cantidad} />
			<Main
				cantidad={cantidad}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default App;
