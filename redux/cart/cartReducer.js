import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE,
    UPDATE_CART,
    UPDATE_ITEM_QUANTITY
} from './cartTypes';

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CART_FETCH_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
            }
        case CART_FETCH_FAILURE:
            return {
                loading: false,
                error: action.payload,
                data: [],
            }
        case UPDATE_CART:
            var data = state.data;
            data.push(action.payload);
            return {
                ...state,
                data: data,
            }
        case UPDATE_ITEM_QUANTITY:
            var data = state.data;
            if( action.payload.quantity){
                data = data.map((item) => {
                    if(item.id === action.payload.id){
                        item.quantity = action.payload.quantity;
                    }
                    return item;
                });
            }else{
                data = data.filter((item) => {
                    return !!(item.quantity)
                });
            }
            return {
                ...state,
                data: data,
                loading: false,
            }
        default:
            return state;
    }
}

export default reducer;