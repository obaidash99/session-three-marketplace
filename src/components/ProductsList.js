import productsData from '../products-data';
import Product from './Product';
import Filter from './Filter';
import './ProductsList.css';
import { useState } from 'react';

function ProductsList() {
	const [category, setCategory] = useState('');

	let product;

	product = productsData.map((product) => {
		return product.category === category ? (
			<Product product={product} key={product.id} />
		) : !category ? (
			<Product product={product} key={product.id} />
		) : null;
		// product.price > 100 ? <Product product={product} key={product.id} /> : null;
	});

	return (
		<>
			{/* <Filter /> */}
			<button
				onClick={() => {
					setCategory("men's clothing");
				}}
			>
				Men
			</button>

			<button
				onClick={() => {
					setCategory("women's clothing");
				}}
			>
				Women
			</button>

			<button
				onClick={() => {
					setCategory('jewelery');
				}}
			>
				Jewelery
			</button>

			<button
				onClick={() => {
					setCategory('electronics');
				}}
			>
				Electronics
			</button>

			<button
				onClick={() => {
					setCategory('');
				}}
			>
				Clear
			</button>

			<div className="products-list">
				<div className="row">{product}</div>
			</div>
		</>
	);
}

export default ProductsList;
