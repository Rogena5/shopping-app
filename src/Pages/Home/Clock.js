import React from 'react';
import { Link } from 'react-router-dom';
import counterImg from '../../Assets/images/counter-timer-img.png';
import Timer from './Timer';


const Clock = () => {
	return (
		<section className='--counter'>
			<div className=' container --flex-between --flex-wrap --py'>
				<div>
					<div className='content-timer --py'>
						<p className='--text-light --p'>Limited Offer</p>
						<h3 className='--text-light'>Quality Armchair</h3>
					</div>

					<Timer />
					<div>
						<button className='--btn'>
							<Link to='/shop'>Visit Store</Link>
						</button>
					</div>
				</div>

				<div className='--img-display'>
					<img src={counterImg} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Clock;
