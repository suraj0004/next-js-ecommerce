import { combineReducers } from 'redux';
import categoryReducer from '~/redux/categories/categoryReducer';
import productReducer from '~/redux/products/productReducer';
import cartReducer from '~/redux/cart/cartReducer';
import globalReducer from '~/redux/global/reducer';
import orderReducer from '~/redux/orders/orderReducer';
import orderDetailReducer from '~/redux/orderDetails/orderDetailReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    global: globalReducer,
    orders: orderReducer,
    orderDetail : orderDetailReducer,

});

export default rootReducer;