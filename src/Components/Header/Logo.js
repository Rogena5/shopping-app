import classes from './logo.module.scss'
// import Logoimg from  '../../Assets/images/eco-logo.png'
import Logoimg from '../../Assets/logo.svg'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
			<>
				<div>
					<div>
						<h2 className={classes.logo}>
							<Link to='/home'>
								<img src={Logoimg} alt='' style={{ width: 120 }} />
							</Link>
						</h2>
					</div>
				</div>
			</>
		);
}
export default Logo
