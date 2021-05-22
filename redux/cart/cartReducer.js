import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE,
    UPDATE_CART,
    UPDATE_ITEM_QUANTITY,
    DELETE_PRODUCT,
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
                data : []
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
                data = data.map((item) => {
                    if(item.id === action.payload.id){
                        item.quantity = action.payload.quantity;
                    }
                    return item;
                });
            
            return {
                ...state,
                data: data,
                loading: false,
            }

            case DELETE_PRODUCT:
                var data = state.data;
                    data = data.filter((item) => (item.id !== action.payload));
                
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