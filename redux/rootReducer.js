import { combineReducers } from 'redux';
import categoryReducer from '@/redux/categories/categoryReducer';
import productReducer from '@/redux/products/productReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
});

export default rootReducer;