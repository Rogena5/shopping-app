import { useState } from 'react';
import { toast } from 'react-toastify';
import PageHero from '../Pages/shop/PageHero';

const BookingForm = () => {
	const [name, setname] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [postal, setPostal] = useState('');
	const [country, setCountry] = useState('');

	const changeName = (e) => {
		setname(e.target.value);
	};
	const changeEmail = (e) => {
		setEmail(e.target.value);
	};
	const changeNumber = (e) => {
		setNumber(e.target.value);
	};
	const changeAddress = (e) => {
		setAddress(e.target.value);
	};
	const changeCity = (e) => {
		setCity(e.target.value);
	};
	const changePostal = (e) => {
		setPostal(e.target.value);
	};
	const ChangeCountry = (e) => {
		setCountry(e.target.value);
	};
	const information = {
		name,
		email,
		number,
		address,
		city,
		postal,
		country,
	};
	const checkoutDone = (e) => {
		e.preventDefault();
		if (name && email && number && address && city && postal && country) {
			toast.success('checkout successfully');
			console.log(information);
		} else {
			toast.error('please fill out all fields');
		}
		setname('');
		setEmail('');
		setNumber('');
		setAddress('');
		setCity('');
		setPostal('');
		setCountry('');
	};

	return (
		<>
			<PageHero title={'checkout'} />
			<section className='container --py2'>
				<h3>Billing Information</h3>
				<form className='--gap2 --form-control'>
					<div>
						<input
							type='text'
							placeholder='enter your name'
							className='--input-check'
							value={name}
							onChange={changeName}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='enter your email'
							className='--input-check'
							value={email}
							onChange={changeEmail}
						/>
					</div>
					<div>
						<input
							type='number'
							placeholder='enter your number'
							className='--input-check'
							value={number}
							onChange={changeNumber}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='street adress'
							className='--input-check'
							value={address}
							onChange={changeAddress}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='city'
							className='--input-check'
							value={city}
							onChange={changeCity}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='postal code'
							className='--input-check'
							value={postal}
							onChange={changePostal}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='country'
							className='--input-check'
							value={country}
							onChange={ChangeCountry}
						/>
					</div>
					<div>
						<button className='--btn --btn-maroon' onClick={checkoutDone}>
							Place an order
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default BookingForm;
