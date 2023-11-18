import { ADD, REDUCE } from "./actionTypes"

export const addAction = (payload) => {
    return { type: ADD, payload: payload }
}

export const reduceAction = (payload) => {
    return { type: REDUCE, payload: payload }
}