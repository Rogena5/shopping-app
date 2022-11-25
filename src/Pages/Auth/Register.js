import classes from './auth.module.scss';
import RegisterImg from '../../Assets/register.png';
import Card from '../../Components/Card/Card';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from '../../Components/Loader/Loader';
// import createUserWithEmailAndPassword from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import{auth} from '../../firebase/Config';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	// const [isloader, setLoader] = useState(false);
	const navigate = useNavigate();

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changePass = (e) => {
		setPassword(e.target.value);
	};

	const changeConfirm = (e) => {
		setConfirmPass(e.target.value);
	};

	const submitUser = (e) => {
		e.preventDefault();
		if (password !== confirmPass) {
			toast.error('passwords do not match...');
		}
		// setLoader(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user)
				// setLoader(false);
				toast.success('Registration Successful...');
				navigate('/login');
			})
			.catch((error) => {
				toast.error(error.message);
				
			});
	};

	return (
		<React.Fragment>
			
			{/* {isloader && <Loader />} */}
			<section className={`container ${classes.auth}`}>
				<Card>
					<div className={classes.form}>
						<h2>Register</h2>
						<form onSubmit={submitUser}>
							<input
								type='text'
								placeholder='email'
								required
								value={email}
								onChange={changeEmail}
							/>
							<input
								type='password'
								placeholder='password'
								required
								vlaue={password}
								onChange={changePass}
							/>
							<input
								type='password'
								placeholder='Confirm password'
								required
								value={confirmPass}
								onChange={changeConfirm}
							/>
							<button type='Submit' className='--btn --btn-primary --btn-block'>
								Register
							</button>
						</form>

						<div className={classes.register}>
							<p>Already have an account?</p>
							<Link to='/login'>Login</Link>
						</div>
					</div>
				</Card>

				<div className={classes.img}>
					<img src={RegisterImg} alt='register' width='500' />
				</div>
			</section>
		</React.Fragment>
	);
};

export default Register;
