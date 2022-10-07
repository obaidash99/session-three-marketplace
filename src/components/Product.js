import './Product.css';

function Product({ product }) {
	return (
		<div className="card">
			<img src={product.image} alt="" />
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<p>Price: {product.price}</p>
			<button
				onClick={() => {
					console.log('you are going to buy product...', product.price);
				}}
			>
				Buy
			</button>
		</div>
	);
}

export default Product;
