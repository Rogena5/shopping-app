import { configureStore,  combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice'
import CartSlice from './slice/CartSlice';

const rootReducer = combineReducers({
    auth: authReducer ,
    cart: CartSlice
});

const store = configureStore({
    reducer: rootReducer
})

export default store