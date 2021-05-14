import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE
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
                loading: true,
                error: null,
                data: [],
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
        default:
            return state;
    }
}

export default reducer;