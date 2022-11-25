import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
// import classses from './shop.module.scss'
import { useState } from 'react';
import products from '../../Assets/data/products';

import ProductsList from '../Products/ProductsList';
import PageHero from './PageHero'

// export const commonItemShop = (
// 	<div
// 		className='--background-shop'
// 		style={{ height: 500 }}
		
// 		></div>
// );



const Shop = () => {

	const [productsData, setProductsData] = useState(products);

	const filterHandler = (e) => {
		const filteredValue = e.target.value;
		if (filteredValue === 'sofa') {
			const filteredProducts = products.filter(
				(item) => item.category === 'sofa',
			);
			setProductsData(filteredProducts);
		} else if (filteredValue === 'watch') {
			const filteredProducts = products.filter(
				(item) => item.category === 'watch',
			);
			setProductsData(filteredProducts);
		} else if (filteredValue === 'mobile') {
			const filteredProducts = products.filter(
				(item) => item.category === 'mobile',
			);

			setProductsData(filteredProducts);
		} else if (filteredValue === 'chair') {
			const filteredProducts = products.filter(
				(item) => item.category === 'chair',
			);

			setProductsData(filteredProducts);
		} else if (filteredValue === 'wireless') {
			const filteredProducts = products.filter(
				(item) => item.category === 'wireless',
			);

			setProductsData(filteredProducts);
		}
	};

	const searchHandler =(e)=>{
		const searchItem = e.target.value;
		const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchItem.toLowerCase()))
        setProductsData(searchedProducts)
	}
	return (
		<>
			{/* {commonItemShop} */}
			<PageHero title={"shop"}/>
			<div className='--height-shop --py2'>
				<h1 className='--text-center --py2 '>SHOPING NOW!</h1>

				<div className='--flex-between container  --gap-sm --flex-wrap --flex-dir-column'>
					<div className='categ'>
						<select onChange={filterHandler}>
							<option>filter by category</option>
							<option value='sofa'>Sofa</option>
							<option value='mobile'>Mobile</option>
							<option value='watch'>Watch</option>
							<option value='chair'>chair</option>
							<option value='wireless'>Wireless</option>
						</select>
					</div>

					{/* <div className='sort'>
						<select>
							<option>Sort by </option>
							<option value='ascending'>Ascending</option>
							<option value='descending'>Descending</option>
						</select>
					</div> */}

					<div className='--flex-between --search'>
						<input
							type='text'
							placeholder='search....'
							className='--input'
							onChange={searchHandler}
							></input>

						<span>
							<AiOutlineSearch size={18} />
						</span>
					</div>
				</div>

				<section>
					{productsData.length === 0 ? (
						<h2 className='--text-center --py2'>No Products are found!!</h2>
					) : (
						<ProductsList data={productsData} />
					)}
				</section>
			</div>
		</>
	);
};

export default Shop;
