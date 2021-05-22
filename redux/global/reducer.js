import {
    SHOW_LOADER,
    STOP_LOADER
} from "./types"

const initialState = {
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                loading: true
            }
        case STOP_LOADER:
            return {
                loading: false
            }
        default:
            return state
    }
}

export default reducer