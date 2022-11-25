// import { commonItemShop } from '../../Pages/shop/Shop';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { cartActions } from '../../redux/slice/CartSlice';
import { Link } from 'react-router-dom';
import PageHero from '../../Pages/shop/PageHero';


const Cart = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	return (
		<>
			
			<PageHero title={'cart'} />
			<section className='container --py2 --flex-between --gap --flex-wrap'>
				{cartItems.length === 0 ? (
					<h3>No items added to cart</h3>
				) : (
					<table style={{ width: '80%' }} className='containe'>
						<thead>
							<tr>
								<th className='--text-md'>Image</th>
								<th className='--text-md'>Title</th>
								<th className='--text-md --width-200px'>Price</th>
								<th className='--text-md --width-200px'>Qnty</th>
								<th className='--text-md --width-200px'>Delete</th>
							</tr>
						</thead>

						{cartItems.map((item, index) => (
							<tbody key={index}>
								<Tr item={item} />
							</tbody>
						))}
					</table>
				)}
				<div>
					<div className='--flex-between  '>
						<h3>Subtotal</h3>
						<span style={{ fontWeight: 'bold', fontSize: 20 }}>
							${totalAmount}
							
						</span>
					</div>

					<p className='--py'>Taxes and shipping will calculate in checkout</p>
					<button className='--btn --btn-lg --btn-maroon --width-100'>
						<Link to='/shop' className='--link'>
							Continue Shopping
						</Link>
					</button>

					{totalAmount > 0 ? (
						<button className='--btn --btn-lg --btn-maroon --width-100'>
							<Link to='/checkout' className='--link'>
								check out
							</Link>
						</button>
						
					) : (
						''
					)}
				</div>
			</section>
		</>
	);
};

const Tr = ({ item }) => {
	const dispatch = useDispatch();

	const deleteProHandler = () => {
		dispatch(cartActions.deleteItem(item.id));
	};

	

	return (
		<>
			<tr className='--text-center'>
				<td>
					<img src={item.imgUrl} alt='img' />
				</td>
				<td>
					<h4 className='--text-center'>{item.productName}</h4>
				</td>
				<td>
					<h4>${item.price}</h4>
				</td>
				<td>
					<h4>{item.quantity}</h4>
				</td>
				<td>
					<RiDeleteBin6Line
						size={22}
						style={{ color: 'red' }}
						onClick={deleteProHandler}
					/>
				</td>
			</tr>
		</>
	);

	
};

export default Cart;
