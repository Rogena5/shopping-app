import heroImg from '../../Assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../Products/ProductsList';

import products from '../../Assets/data/products';
import { useEffect, useState } from 'react';
// import BestProductList from '../Products/BestProductList';
// import MobileList from '../Products/MobileList';
// import WirelessList from '../Products/WirelessList';
import Clock from './Clock';
// import PopularList from '../Products/PopularList';

const Home = () => {
	const year = new Date().getFullYear();
	const [trending, setTrending] = useState(products);
	const [bestSales, setBestSales] = useState(products);
	const [mobileProduct, setMobileProduct] = useState(products);
	const [wirelessProduct, setWirelessProduct] = useState(products);
	const [popular, setPopular] = useState(products);

	useEffect(() => {
		const filteredChair = products.filter((item) => item.category === 'chair');
		const filterBestSales = products.filter((item) => item.category === 'sofa');
		const filterMobile = products.filter((item) => item.category === 'mobile');
		const filterWire = products.filter((item) => item.category === 'wireless');
		const filterPopular = products.filter((item) => item.category === 'watch');
		setTrending(filteredChair);
		setBestSales(filterBestSales);
		setMobileProduct(filterMobile);
		setWirelessProduct(filterWire);
		setPopular(filterPopular);
	}, [setBestSales, setMobileProduct, setTrending, setPopular]);

	return (
		<>
			<section>
				<div className=' --mh-100vh container --flex-between container --flex-wrap '>
					<div className='hero-content'>
						<p className='--py'>Trending Product in {year}</p>
						<h1 className='--fw-bold'>
							Make Your Interior More Minimalistic & Modern
						</h1>
						<p className='--py'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
							saepe ratione velit consectetur sapiente mollitia laboriosam
							aliquam, tempora numquam eaque.
						</p>
						<div className='--py'>
							<button className='--btn --btn-maroon'>
								<Link to='/shop' className='--link'>
									Order Now
								</Link>
							</button>
						</div>
					</div>
					<div className='--img-display'>
						<img src={heroImg} alt='' className='hero-img' />
					</div>
				</div>
			</section>

			<Services />

			<section>
				<h1 className='--text-center'>Trending</h1>
				<ProductList data={trending}/>
			</section>

			<section>
				<h1 className='--text-center'>best sales</h1>
				<ProductList data={bestSales} />
			</section>

			<Clock />

			<section>
				<h1 className='--text-center'>New Arrivals</h1>
				<ProductList data={mobileProduct} />
				<ProductList data={wirelessProduct} />
			</section>

			<section>
				<h1 className='--text-center'>Popular Products</h1>
				<ProductList data={popular} />
			</section>

			{/* <BestProductList bestSales={bestSales} /> */}

			{/* <MobileList mobileProduct={mobileProduct} /> */}

			{/* <WirelessList data={wirelessProduct} /> */}
		</>
	);
};
export default Home;
