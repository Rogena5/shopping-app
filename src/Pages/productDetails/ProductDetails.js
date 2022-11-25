import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../Assets/data/products';
// import { commonItemShop } from '../shop/Shop';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/CartSlice';
import { toast } from 'react-toastify';
import Card from '../../Components/Card/Card';
import PageHero from '../shop/PageHero';


const ProductDetails = () => {
	const [tab, setTab] = useState();
	const [rating, setRating] = useState(0);

	const refName = useRef();
	const refMsg = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const reviewUserName = refName.current.value;
		const reviewUserMsg = refMsg.current.value;

		const reviewDetails = {
			nameUser: reviewUserName,
			msg: reviewUserMsg,
			
		};
		console.log(reviewDetails);
		toast.success('thanks for your interest in our products');
		refName.current.value="";
		refMsg.current.value="";
		setRating("")
	}; 

	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id,
				productName,
				price,
				image: imgUrl,
			}),
		);
		toast.success('Product added successfully');
	};
	const { id } = useParams();
	const product = products.find((item) => item.id === id);
	const {
		productName,
		price,
		imgUrl,
		reviews,
		avgRating,
		description,
		shortDesc,
	} = product;
	return (
		<>
			<section>
				<PageHero title={productName} />
				<div className='container --flex-between --flex-wrap --py2'>
					<div className='--imgcard-detail'>
						<img src={imgUrl} alt='' className='--imgcard-details' />
					</div>

					<div className='info --py2 --text-p'>
						<h2>{productName}</h2>

						<div className='rating --flex-around --py'>
							<div style={{ color: 'goldenrod' }}>
								<AiFillStar size={20} />
								<AiFillStar size={20} />
								<AiFillStar size={20} />
								<AiFillStar size={20} />
								<AiFillStar size={20} />
							</div>
							(
							<span style={{ color: 'goldenrod', fontSize: 17 }}>
								{avgRating}
							</span>
							<span>rating</span>)
						</div>

						<h4> ${price}</h4>

						<p className='--py'>{shortDesc}</p>

						<button className='--btn --btn-maroon --btn-lg' onClick={addToCart}>
							Add To Cart
						</button>
					</div>
				</div>
				<div className='container --py2'>
					<div className='container --flex-around --gap'>
						<h4
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setTab('desc');
							}}>
							Description
						</h4>
						<h4
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setTab('rev');
							}}>
							Reviews({reviews.length})
						</h4>
					</div>

					{tab === 'desc' ? (
						<p>{description}</p>
					) : (
						<div>
							{reviews?.map((item, index) => (
								<ul>
									<li key={index}>
										<span style={{ color: 'goldenrod' }}>
											{item.rating} (Average Rating)
										</span>

										<p>{item.text}</p>
									</li>
								</ul>
							))}

							<section className='container --py2'>
								<Card>
									<form
										action=''
										style={{ padding: 30 }}
										onSubmit={submitHandler}>
										<h3>Leave Your Experience</h3>
										<div>
											<input
												type='text'
												placeholder='enter your name'
												className='--input-review-name'
												required
												ref={refName}
											/>
											
											<div className='star-rating'>
												{[...Array(5)].map((star, index) => {
													index += 1;
													return (
														<button
															type='button'
															key={index}
															className={index <= rating ? 'on' : 'off'}
															onClick={() => setRating(index)}>
															<span className='star'>&#9733;</span>
														</button>
													);
												})}
											</div>
											
											<textarea
												placeholder='Review Message ... '
												className='--input-review'
												required
												ref={refMsg}
											/>
										</div>
										<button
											type='submit'
											className='--btn --btn-lg --btn-maroon'>
											Submit
										</button>
									</form>
								</Card>
							</section>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
