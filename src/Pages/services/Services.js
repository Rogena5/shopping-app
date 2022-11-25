import React from 'react';
// import { FaShippingFast } from 'react-icons/fa';

import serviceData from '../../Assets/data/serviceData';
import 'remixicon/fonts/remixicon.css';



const Services = () => {
	return (
		<section>
			<div className='--grid-25 container'>
				{serviceData.map((item) => (
					<div
						className=' --p2 --flex-between --gap --card'
						key={item.icon}
						style={{ background: `${item.bg}` }}>
						<i
							className={item.icon}
							style={{ fontSize: 30, color: 'maroon' }}></i>
						
						<div className='card-content'>
							<h4>{item.title}</h4>
							<p>{item.subtitle}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
