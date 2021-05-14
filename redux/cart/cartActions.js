import {
    CART_FETCH_REQUEST,
    CART_FETCH_SUCCESS,
    CART_FETCH_FAILURE
} from "./cartTypes";

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

export const fetchcart = () => {
    return (dispatch) => {
        // fetching data
        dispatch(cartRequest())
        setTimeout(() => {
            const dummycart = [
                {
                    product_id: 1,
                    quantity: 10,
                    product: {
                        id: 1,
                        name: "product 1",
                        weight: "per 50 gm",
                        price: "Rs. 100 /- ",
                        image: "/images/profile.jpg",
                    }
                },
                {
                    product_id: 2,
                    quantity: 1,
                    product: {
                        id: 2,
                        name: "product 2",
                        weight: "per 500 gm",
                        price: "Rs. 1000 /- ",
                        image: "/images/profile.jpg",
                    }
                },
            ]
            dispatch(cartSuccess(dummycart))
        }, 5000);
        console.log("fetching cart");
    }
}