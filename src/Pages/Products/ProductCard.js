import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartActions } from '../../redux/slice/CartSlice';

const ProductCard = ({ item}) => {
	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id: item.id,
				productName: item.productName,
				price: item.price,
				imgUrl: item.imgUrl,
			}),
		);
		toast.success('Product added successfully');
	};
	return (
		<>
			<div className='--card' >
				<div className=''>
					<img src={item.imgUrl} alt='' className='--imgcard' />
				</div>
				<div className='contentChair --p2'>
					<h2>
						<Link
						
							to={`/shop/${item.id}`}
							
							style={{ color: 'maroon', fontSize: 20 }}>
							{item.productName}
						</Link>
					</h2>

					<span style={{ fontSize: 18, color: 'silver' }}>{item.category}</span>
					<div className=' --flex-between'>
						<span
							className='price'
							style={{ fontSize: 15, fontWeight: 'bold' }}>
							$ {item.price}
						</span>
						<i className='ri-add-line --i' onClick={addToCart}></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
