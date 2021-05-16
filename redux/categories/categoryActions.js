import axios from "axios";
import { api_fail_error }  from "@/helpers/constant.js"
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

export const fetchCategories = (shop_slug) => {
    return (dispatch) => {

        dispatch(categoryRequest())
        axios.get(`http://localhost/shopinventorymanagement/public/api/${shop_slug}`)
        .then(response => {
            dispatch(categorySuccess(response.data.data))
        }).catch(error => {
            dispatch(categoryFailure(api_fail_error))
        })
    }
}