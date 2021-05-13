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

export const categorySuccess = () => {
    return {
        type: CATEGORY_FETCH_SUCCESS
    }
}

export const categoryFailure = (error) => {
    return {
        type: CATEGORY_FETCH_FAILURE,
        payload: error
    }
}

export const fetchCategories = (postData, callBackMethod) => {
    return (dispatch) => {
        // fetching data
        console.log("fetching categories");
    }
}