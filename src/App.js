import { useState } from 'react';

import Welcome from './components/Welcome';
import Guest from './components/Guest';
import List from './components/List';
import ProductsList from './components/ProductsList';

function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	// let element = isLoggedIn ? <h1>I'm Logged In</h1> : <h1>I'm Not Logged In</h1>;

	// if (isLoggedIn) {
	// 	element = <h1>I'm Logged In</h1>;
	// } else {
	// 	element = <h1>I'm Not Logged In</h1>;
	// }

	return (
		<>
			{/* <button
				onClick={() => {
					setIsLoggedIn(true);
				}}
			>
				Login
			</button>
			{isLoggedIn ? <Welcome name="Obaida" /> : <Guest />}

			<List /> */}
			<div className="products-list">
				<h1>Hello There</h1>
			</div>
			<ProductsList />
		</>
	);
}

export default App;
