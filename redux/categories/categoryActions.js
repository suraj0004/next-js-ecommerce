import {
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_FETCH_FAILURE
} from "./categoryTypes";

export const categoryRequest = () => {
    return {
        type: CATEGORY_FETCH_REQUEST
    }
}

export const categorySuccess = (data) => {
    return {
        type: CATEGORY_FETCH_SUCCESS,
        payload: data
    }
}

export const categoryFailure = (error) => {
    return {
        type: CATEGORY_FETCH_FAILURE,
        payload: error
    }
}

export const fetchCategories = () => {
    return (dispatch) => {
        // fetching data
        dispatch(categoryRequest())
        setTimeout(() => {
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
            dispatch(categorySuccess(dummyCategories))
        }, 5000);
        console.log("fetching categories");
    }
}