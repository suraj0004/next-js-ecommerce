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

export const fetchProducts = () => {
    return (dispatch) => {
        // fetching data
        dispatch(productRequest())
        setTimeout(() => {
            const dummyProducts = [
                {
                    id: 1,
                    name: "product 1",
                    weight: "per 50 gm",
                    price: "Rs. 100 /- ",
                    image: "/images/profile.jpg",
                },
                {
                    id: 2,
                    name: "product 2",
                    weight: "per 500 gm",
                    price: "Rs. 1000 /- ",
                    image: "/images/profile.jpg",
                },
                {
                    id: 3,
                    name: "product 3",
                    weight: "per 5 gm",
                    price: "Rs. 30 /- ",
                    image: "/images/profile.jpg",
                },
                {
                    id: 4,
                    name: "product 4",
                    weight: "per 1 kg",
                    price: "Rs. 250 /- ",
                    image: "/images/profile.jpg",
                },
                {
                    id: 5,
                    name: "product 5",
                    weight: "per 100 gm",
                    price: "Rs. 50 /- ",
                    image: "/images/profile.jpg",
                },
                {
                    id: 6,
                    name: "product 6",
                    weight: "per 1.5 kg",
                    price: "Rs. 150 /- ",
                    image: "/images/profile.jpg",
                },
            ]
            dispatch(productSuccess(dummyProducts))
        }, 5000);
        console.log("fetching proucts");
    }
}