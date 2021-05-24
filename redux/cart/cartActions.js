import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE,
    UPDATE_CART,
    UPDATE_ITEM_QUANTITY,
    DELETE_PRODUCT,
} from "./cartTypes";

import { showLoader, stopLoader } from "@/redux/global/actions"

import { cart_read, cart_insert, cart_update, cart_delete, cart_truncate } from "@/indexDB/cartDB"
import { authApi } from '@/services/api';

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
    return (dispatch, getState) => {

        dispatch(showLoader())

        if (getState().global.isAuthenticated) {
            authApi.get(`/${getState().global.shop_slug}/cart/get`)
                .then(response => {
                    dispatch(cartSuccess(response.data.data))
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    dispatch(stopLoader())
                })
        } else {
            cart_read().then(data => {
                dispatch(cartSuccess(data))
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                dispatch(stopLoader())
            })
        }
    }
}

export const addToCart = (item) => {
    return (dispatch, getState) => {
        dispatch(showLoader())

        if (getState().global.isAuthenticated) {

            item = {
                product_id: item.id,
            }
            authApi.post(`/${getState().global.shop_slug}/cart/add`, item)
                .then(response => {
                    dispatch(updateCart(response.data.data))
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    dispatch(stopLoader())
                })
        }
        else {
            item = {
                product_id: item.id,
                quantity: 1,
                product: item,
            }
            cart_insert(item).then(id => {
                item.id = id
                dispatch(updateCart(item))
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                dispatch(stopLoader())
            })
        }

    }
}

export const updateCartProduct = (item) => {
    return (dispatch, getState) => {

        dispatch(showLoader())

        if (getState().global.isAuthenticated) {
            let payload = {
                id: item.id,
                product_id: item.product_id,
                quantity: item.quantity,
            }
            authApi.patch(`/${getState().global.shop_slug}/cart/update`, payload)
                .then(response => {
                    dispatch(updateQuantity(response.data.data))
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    dispatch(stopLoader())
                })
        } else {
            cart_update(item.id, item.quantity).then(id => {
                setTimeout(() => {
                    dispatch(updateQuantity(item))
                }, 100);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                dispatch(stopLoader())
            })
        }
    }
}

export const deleteCartProduct = (item) => {
    return (dispatch, getState) => {
        dispatch(showLoader())

        if (getState().global.isAuthenticated) {
            authApi.delete(`/${getState().global.shop_slug}/cart/delete/${item.id}`)
                .then(response => {
                    dispatch(deleteQuantity(item.id))
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    dispatch(stopLoader())
                })
        } else {
            cart_delete(item.id).then(() => {
                dispatch(deleteQuantity(item.id))
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                dispatch(stopLoader())
            })
        }
    }
}

export const truncateCart = () => {

}

export const syncCart = () => {
    return (dispatch, getState) => {
        cart_read().then(cart => {

            cart = cart.map(item => {
                return {
                    product_id: item.product_id,
                    quantity: item.quantity,
                }
            });

            authApi.post(`/${getState().global.shop_slug}/cart/sync`, { cart })
                .then(response => {
                    console.log(response);
                    cart_truncate().then((ids) => {
                        console.log(ids);
                        dispatch(fetchcart())
                    }).catch(error => {
                        console.log(error);
                    })
                }).catch(error => {
                    console.log(error);
                })

        }).catch(err => {
            console.log(err);
        })
    }
}
