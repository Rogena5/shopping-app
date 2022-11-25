import classes from './auth.module.scss';
import forgetimg from '../../Assets/forgot.png';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {  sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/Config';

const Reset = () => {
	const [email, setemail] = useState('');
	const resetPass = (e) => {
		e.preventDefault();
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toast.success('check your email for rest link');
			})

			.catch((error) => {
				// toast.error(error.message);
				toast.error("This Gmail is not found");
			});
	};

	return (
		<section className={`container ${classes.auth}`}>
			<div className={classes.img}>
				<img src={forgetimg} alt='reset password' width='500' />
			</div>

			<Card>
				<div className={classes.form}>
					<h2>Reset Password</h2>
					<form onSubmit={resetPass}>
						<input
							type='email'
							placeholder='email'
							required
							value={email}
							onChange={(e) => {
								setemail(e.target.value);
							}}
						/>
						<button type='submit' className='--btn-primary --btn --btn-block '>
							Reset Password
						</button>

						<div className={classes.links}>
							<p>
								<Link to='/register'>- Rigster</Link>
							</p>
							<p>
								<Link to='/login'>- Login</Link>
							</p>
						</div>
					</form>
				</div>
			</Card>
		</section>
	);
};
export default Reset;
