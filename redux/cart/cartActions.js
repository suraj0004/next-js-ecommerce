import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE,
    UPDATE_CART,
    UPDATE_ITEM_QUANTITY
} from "./cartTypes";

import { getCart, addCart } from "@/indexDB/cartDB"

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

export const fetchcart = () => {
    return (dispatch) => {
        // fetching data
        console.log("fetching cart");
        dispatch(cartRequest())
        setTimeout(() => {
            let cart = getCart();
            dispatch(cartSuccess(cart))
        }, 1000);
    }
}

export const addToCart = (item) => {
    return (dispatch) => {
        item = {
            product_id: item.id,
            quantity: 1,
            product : item,
        }
        addCart(item).then(id =>{
            item.id = id
            dispatch(updateCart(item))
        }).catch(err =>{
            console.log(err);
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