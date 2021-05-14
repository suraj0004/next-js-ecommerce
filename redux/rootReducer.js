import { combineReducers } from 'redux';
import categoryReducer from '@/redux/categories/categoryReducer';
import productReducer from '@/redux/products/productReducer';
import cartReducer from '@/redux/cart/cartReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
});

export default rootReducer;