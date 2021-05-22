import {
    SHOW_LOADER,
    STOP_LOADER,
    SET_AUTH_USER,
} from "./types"

import { getCookie } from '@/services/cookie'
import { login_cookie_key } from "@/helpers/constant"

const initialState = {
    loading: false,
    token: getCookie(login_cookie_key) || null,
    isAuthenticated: !!getCookie(login_cookie_key),
    user: null,
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
                loading: false,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            }
        default:
            return state
    }
}

export default reducer