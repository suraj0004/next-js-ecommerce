import Axios from "axios";

const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_PATH,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;