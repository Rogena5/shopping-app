import classes from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
// import Cart from './Cart';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/Config';
import { toast } from 'react-toastify';
import { FaCartPlus, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_ACTIVE_USER,
	REMOVE_ACTIVE_USER,
} from '../../redux/slice/authSlice';
import ShowOnLogin from '../hiddenLinks/HiddenLink';
import { ShowOnLogout } from '../hiddenLinks/HiddenLink';

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const navigate = useNavigate();
	const [displayName, setDisplayName] = useState();
	const dispatch = useDispatch();
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

	const toggleMenu = () => {
		setShowNav(!showNav);
	};

	const hideMenu = () => {
		setShowNav(false);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				if (user.displayName == null) {
					const u1 = user.email.substring(0, user.email.indexOf('@'));
					const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
					setDisplayName(uName);
				} else {
					setDisplayName(user.displayName);
				}

				setDisplayName(user.displayName);
				dispatch(
					SET_ACTIVE_USER({
						email: user.email,
						userName: user.displayName ? user.displayName : displayName,
						userID: user.uid,
					}),
				);
			} else {
				setDisplayName('');
				dispatch(REMOVE_ACTIVE_USER());
			}
		});
	}, [displayName, dispatch]);

	const logOutUser = () => {
		signOut(auth)
			.then(() => {
				toast.success('log out successfully');
				navigate('/');
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const Active = ({ isActive }) => (isActive ? `${classes['active']}` : '');

	return (
		<>
			<header className={classes.fixed}>
				<Logo />

				<nav
					className={
						showNav ? `${classes['show-nav']}` : `${classes['hide-nav']}`
					}>
					<div
						className={
							showNav
								? `${classes['nav-wrapper']}`
								: `${classes['nav-wrapper']}`
						}
						onClick={hideMenu}></div>

					<ul onClick={hideMenu}>
						<li className={classes['logo-mobile']}>
							<Logo />
							<AiOutlineClose color='white' size={20} onClick={hideMenu} />
						</li>
						<li>
							<NavLink to='/home' className={Active}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/shop' className={Active}>
								shop
							</NavLink>
						</li>
					</ul>

					<div className={classes['header-right']} onClick={hideMenu}>
						<span className={classes.links}>
							<ShowOnLogin>
								<a href='#o' style={{ color: 'maroon' }}>
									<FaUserCircle size={15} /> {displayName}
								</a>
							</ShowOnLogin>

							<ShowOnLogout>
								<NavLink to='/register' className={Active}>
									Register
								</NavLink>
							</ShowOnLogout>

							<ShowOnLogout>
								<NavLink to='/login' className={Active}>
									LogIn
								</NavLink>
							</ShowOnLogout>

							<ShowOnLogin>
								<NavLink to='/' onClick={logOutUser}>
									log Out
								</NavLink>
							</ShowOnLogin>

							<ShowOnLogin>
								<NavLink to='/cart'>
									Cart <FaCartPlus size={18} /> {totalQuantity}
								</NavLink>
							</ShowOnLogin>
						</span>
					</div>
				</nav>

				<div className={classes['menu-icon']}>
					<span>
						<BiMenuAltRight size={30} onClick={toggleMenu} />
					</span>
				</div>
			</header>
		</>
	);
};
export default Header;
