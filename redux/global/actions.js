import {
    SHOW_LOADER,
    STOP_LOADER,
    SET_AUTH_USER,
    SET_SHOP_SLUG,
} from "./types"

import { errorNotification, successNotification } from "@/services/notification"
import {api,authApi} from '@/services/api';
import { api_fail_error }  from "@/helpers/constant.js"
import { setCookie } from '@/services/cookie'
import { login_cookie_key, shop_slug_cookie } from "@/helpers/constant"


export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const stopLoader = () => {
    return {
        type: STOP_LOADER
    }
}

export const setAuthUser = (payload) => {
    return {
        type: SET_AUTH_USER,
        payload: payload
    }
}

export const setShopSlug = (payload) => {
    setCookie(shop_slug_cookie, payload, { path : '/' });
    return {
        type: SET_SHOP_SLUG,
        payload: payload
    }
}

export const doLogin = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) =>{
            dispatch(showLoader())
            api.post("login", payload)
                .then(response => {
                    if (response.data.success) {
                        setTokenCookies(payload.remember, response.data.data.token)
                        dispatch(setAuthUser(response.data.data))
                        successNotification(response.data.message)
                        resolve()
                    } else {
                        errorNotification(response.data.message)
                        reject()
                    }
                }).catch(error => {
                    errorNotification(api_fail_error)
                    reject()
                })
        })
    }
}

export const doRegister = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(showLoader())
        api.post("register", payload)
            .then(response => {
                if (response.data.success) {
                    setTokenCookies(payload.remember, response.data.data.token)
                    dispatch(setAuthUser(response.data.data))
                    successNotification(response.data.message)
                    resolve()
                } else {
                    errorNotification(response.data.message)
                    reject()
                }
            }).catch(error => {
                errorNotification(api_fail_error)
                reject()
            })
        })
    }
}

export const setTokenCookies = (remember, token) =>{
    let options = { path : '/' };
    if(remember){
         let date = new Date();
         const expiryAfterDays = 7;
         date.setTime( date.getTime()  + ( 1000 * 60 * 60 * 24 * expiryAfterDays) );
         options = { path : '/',expires : date };
    }
    setCookie(login_cookie_key, token, options);
    authApi.defaults.headers.Authorization = `Bearer ${token}`
}