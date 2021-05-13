import {
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_FETCH_FAILURE
} from './categoryTypes';

const dummyCategories = [
    {
        id: 1,
        name : "test 1",
        image : "/images/profile.jpg",
    },
    {
        id: 2,
        name : "test 2",
        image : "/images/profile.jpg",
    },
    {
        id: 3,
        name : "test 3",
        image : "/images/profile.jpg",
    },
    {
        id: 4,
        name : "test 4",
        image : "/images/profile.jpg",
    },
    {
        id: 5,
        name : "test 5",
        image : "/images/profile.jpg",
    },
    {
        id: 6,
        name : "test 6",
        image : "/images/profile.jpg",
    },
]

const initialState = {
    loading: false,
    error: null,
    data: dummyCategories,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_FETCH_REQUEST:
            return {
                loading: true,
                error: null,
                data: [],
            };

        case CATEGORY_FETCH_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
            }
        case CATEGORY_FETCH_FAILURE:
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