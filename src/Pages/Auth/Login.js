import classes from './auth.module.scss';
import Loginimg from '../../Assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../../Components/Card/Card';
import { useState } from 'react';
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../firebase/Config';
import { toast } from 'react-toastify';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changePass = (e) => {
		setPassword(e.target.value);
	};

	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				toast.success('Login Successful');
				navigate('/');
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const provider = new GoogleAuthProvider();
	const signInGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success('Login Successfully');
				navigate('/');
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	return (
		<section>
			<div className={`container ${classes.auth}`}>
				<div className={classes.img}>
					<img src={Loginimg} alt='login' width='500' />
				</div>

				<Card>
					<div className={classes.form}>
						<h2>Login</h2>
						<form onSubmit={loginUser}>
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
							<button type='submit' className='--btn --btn-primary --btn-block'>
								Login
							</button>
							<div className={classes.links}>
								<Link to='/reset'>Reset Password</Link>
							</div>
							<p>-- or --</p>
						</form>
						<button
							className='--btn --btn-danger --btn-block'
							onClick={signInGoogle}>
							<FaGoogle /> Login With Google
						</button>
						<div className={classes.register}>
							<p>Dont have an account?</p>
							<Link to='/register'>Register</Link>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};
export default Login;
