import productsData from '../products-data';
import Product from './Product';
import './ProductsList.css';

function ProductsList() {
	const product = productsData.map((product) => {
		return product.price > 100 ? <Product product={product} key={product.id} /> : null;
	});

	return (
		<div className="products-list">
			<div className="row">{product}</div>
		</div>
	);
}

export default ProductsList;
