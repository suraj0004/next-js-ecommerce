import axios from "axios";
import { api_fail_error }  from "@/helpers/constant.js"
import {
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAILURE
} from "./profileTypes";




export const updateProfile = (data) => {
    return (dispatch) => {

        dispatch(categoryRequest())
        axios.get(`http://localhost/shopinventorymanagement/public/api/ecommerce/${shop_slug}`)
        .then(response => {
            if(response.data.success) {
                dispatch(categorySuccess(response.data.data))
            }else {
                dispatch(categoryFailure(response.data.message))    
            }
        }).catch(error => {
            dispatch(categoryFailure(api_fail_error))
        })
    }
}

export const updateCartProduct = (item) => {
    return (dispatch) => {
        dispatch(cartRequest())
        setTimeout(() => {
            dispatch(updateQuantity(item))   
        }, 1000);
    }
}