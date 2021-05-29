import {
    SHOW_LOADER,
    STOP_LOADER,
    SET_AUTH_USER,
    SET_SHOP_SLUG,
    UNSET_AUTH_USER,
} from "./types"

import { getCookie } from '~/services/cookie'
import { login_cookie_key, shop_slug_cookie } from "~/helpers/constant"

const initialState = {
    loading: false,
    token: getCookie(login_cookie_key) || null,
    isAuthenticated: !!getCookie(login_cookie_key),
    user: null,
    shop_slug : getCookie(shop_slug_cookie) || null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADER:
            return {
                ...state,
                loading: false
            }
        case SET_AUTH_USER:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            }
        case SET_SHOP_SLUG:
        return {
            ...state,
            shop_slug : action.payload
        }
        case UNSET_AUTH_USER:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                token: null,
                user: null,
            }
        default:
            return state
    }
}

export default reducer