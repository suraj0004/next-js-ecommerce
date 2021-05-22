import {
    SHOW_LOADER,
    STOP_LOADER
} from "./types"


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