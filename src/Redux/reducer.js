import { ERROR, FETCHSUCCESS, LOADING } from "./actionType";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case FETCHSUCCESS:
            return { ...state, plants: payload, isLoading: false }
        case LOADING:
            return { ...state, isLoading: true }
        case ERROR:
            return { ...state, isError: true, isLoading: false }
        default:
            return state
    }
}