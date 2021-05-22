import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE,
    UPDATE_CART,
    UPDATE_ITEM_QUANTITY,
    DELETE_PRODUCT,
} from "./cartTypes";

import { showLoader, stopLoader } from "@/redux/global/actions"

import { cart_read, cart_insert, cart_update, cart_delete  } from "@/indexDB/cartDB"

export const cartRequest = () => {
    return {
        type: CART_FETCH_REQUEST
    }
}

export const cartSuccess = (data) => {
    return {
        type: CART_FETCH_SUCCESS,
        payload: data
    }
}

export const cartFailure = (error) => {
    return {
        type: CART_FETCH_FAILURE,
        payload: error
    }
}

export const updateCart = (item) => {
    return {
        type: UPDATE_CART,
        payload: item
    }
}

export const updateQuantity = (item) => {
    return {
        type: UPDATE_ITEM_QUANTITY,
        payload: item
    }
}

export const deleteQuantity = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export const fetchcart = () => {
    return (dispatch) => {

        dispatch(showLoader())
        cart_read().then(data =>{
            dispatch(cartSuccess(data))
        }).catch(err =>{
            console.log(err);
        }).finally(() =>{
            dispatch(stopLoader())
        })
    }
}

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch(showLoader())
        item = {
            product_id: item.id,
            quantity: 1,
            product : item,
        }
        cart_insert(item).then(id =>{
            item.id = id
            dispatch(updateCart(item))
        }).catch(err =>{
            console.log(err);
        }).finally(() =>{
            dispatch(stopLoader())
        })
    }
}

export const updateCartProduct = (item) => {
    return (dispatch) => {
        dispatch(showLoader())
        cart_update(item.id, item.quantity).then(id =>{
             setTimeout(() => {
                dispatch(updateQuantity(item))
             }, 100);  
        }).catch(err =>{
            console.log(err);
        }).finally(() =>{
            dispatch(stopLoader())
        })
    }
}

export const deleteCartProduct = (item) => {
    return (dispatch) => {
        dispatch(showLoader())
        cart_delete(item.id).then(() =>{
             dispatch(deleteQuantity(item.id))  
        }).catch(err =>{
            console.log(err);
        }).finally(() =>{
            dispatch(stopLoader())
        })
    }
}