import React from 'react';
import { Link } from 'react-router-dom';
const PageHero = ({ title }) => {
	
	return (
		<section>
			<div className='--background-shop' style={{ height: 400 }}>
				<div style={{ height: 400 }} className=' --align-center container '>
					<h3>
						<Link to=''>
							{/* <span style={{ color: 'black', fontSize: 40 }}>/</span> */}
							<h1 style={{color:"white", fontSize:47}}>{title}</h1>
						</Link>
					</h3>
				</div>
			</div>
		</section>
	);
};
export default PageHero
