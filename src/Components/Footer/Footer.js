import classes from './Footer.module.scss';
import Logo from '../../Assets/images/eco-logo.png';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
	return (
		<>
			<footer className={classes.footer}>
				<div className='content-footer --grid-25 container'>
					<div className='logo'>
						<h4 className='--flex-around '>
							<img src={Logo} alt='logo' style={{ width: 20 }} />
							Multimart
						</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iste.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
							exercitationem.
						</p>
					</div>

					<div className='top '>
						<h4>Top categories</h4>
						<p className='--py'>mobile phone</p>
						<p className='--py'>Modern sofa</p>
						<p className='--py'>Arm chair</p>
						<p className='--py'>Smart watches</p>
					</div>

					<div className='links '>
						<h4>Useful Links</h4>
						<p className='--py'>
							<Link to='/home' style={{ color: 'grey' }}>
								home
							</Link>
						</p>
						<p className='--py'>
							<Link to='/shop' style={{ color: 'grey' }}>
								Shop
							</Link>
						</p>
						<p className='--py'>
							<Link to='/cart' style={{ color: 'grey' }}>
								Cart
							</Link>
						</p>

						<p className='--py'>
							<Link to='' style={{ color: 'grey' }}>
								Privacy Policy
							</Link>
						</p>
					</div>

					<div className='contact '>
						<h4>Contact</h4>
						<div className='--flex-center --gap-sm --py '>
							<HiLocationMarker size={20} />
							<p>Al-ramlStation, 3street, Alexandria</p>
						</div>
						<div className='--flex-center --gap-sm --py'>
							<AiOutlinePhone size={20} />
							<p> +345 -5678 6788</p>
						</div>

						<div className='--flex-center --gap-sm --py'>
							<AiOutlineMail size={20} /> <p>rogenaramze10@gmail.com</p>
						</div>
					</div>
				</div>

				<div className='--text-center --py2'>
					
					&copy; {year} All Right Reserved.
				</div>
			</footer>
		</>
	);
};
export default Footer;
