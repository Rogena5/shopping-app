import React from 'react';

import ProductCard from './ProductCard';

const Products = ({data} ) => {
	return (
		<>
			<div className='container --py2'>
				<div className='--grid-25'>
					{data.map((item) => (
						<ProductCard item={item} key={item.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
