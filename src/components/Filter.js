import productsData from '../products-data';

function Filter() {
	const productsCategory = productsData.map((product) => {
		return <li>{product.category.toLocaleUpperCase()}</li>;
	});

	return (
		<>
			<ul>{productsCategory}</ul>
		</>
	);
}

export default Filter;
