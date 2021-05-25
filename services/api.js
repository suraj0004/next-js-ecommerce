import Axios from "axios";
import { getCookie } from '~/services/cookie'
import { login_cookie_key} from "~/helpers/constant"

export const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_PATH,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const authApi = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_PATH,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getCookie(login_cookie_key)
    }
});
