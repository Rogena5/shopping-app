import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Pages/shop/Shop';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import ProductDetails from './Pages/productDetails/ProductDetails';
import Checkout from './Components/Checkout';

import Reset from './Pages/Auth/Reset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Header/Cart';

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='shop/:id' element={<ProductDetails />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/login' element={<Login />} />
					<Route path='/reset' element={<Reset />} />
					<Route path='/register' element={<Register />} />
					<Route path='/checkout' element={<Checkout />} />

					<Route path='/' element={<Home />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
