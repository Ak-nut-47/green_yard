import { ERROR, FETCHSUCCESS, LOADING } from "./actionType"

export const fetchSuccessAction = (payload) => {
    return { type: FETCHSUCCESS, payload: payload }
}

export const isLoading = () => {
    return { type: LOADING }
}

export const isError = (payload) => {
    return { type: ERROR, payload: payload }
}