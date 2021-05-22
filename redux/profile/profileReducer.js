import {
    PROFILE_FETCH_REQUEST,
    PROFILE_UPDATE_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAILURE,
    
} from './profileTypes';

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case PROFILE_UPDATE_REQUEST:
            return {
                loading: false,
                error: null,
                data: action.payload,
            }
        case PROFILE_FETCH_SUCCESS:
            return {
                loading: false,
                error: action.payload,
                data: [],
            }
        case PROFILE_FETCH_FAILURE:
            var data = state.data;
            data.push(action.payload);
            return {
                ...state,
                data: data,
            }
        
        default:
            return state;
    }
}

export default reducer;