import axios from "axios";
import { api_fail_error }  from "@/helpers/constant.js"

import {
    PRODUCT_FETCH_REQUEST,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_FAILURE
} from "./productTypes";

export const productRequest = () => {
    return {
        type: PRODUCT_FETCH_REQUEST
    }
}

export const productSuccess = (data) => {
    return {
        type: PRODUCT_FETCH_SUCCESS,
        payload: data
    }
}

export const productFailure = (error) => {
    return {
        type: PRODUCT_FETCH_FAILURE,
        payload: error
    }
}

export const fetchProducts = ( shop_slug, category_slug) => {
    return (dispatch) => {
        // fetching data
        dispatch(productRequest())
        axios.get(`http://localhost/shopinventorymanagement/public/api/ecommerce/${shop_slug}/${category_slug}`)
        .then(response => {
            if(response.data.success) {
                dispatch(productSuccess(response.data.data))
            }else{
                dispatch(productFailure(response.data.message))    
            }
        }).catch(error => {
            dispatch(productFailure(api_fail_error))
        })
    }
}