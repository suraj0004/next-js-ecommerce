import { combineReducers } from 'redux';
import categoryReducer from '@/redux/categories/categoryReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
});

export default rootReducer;