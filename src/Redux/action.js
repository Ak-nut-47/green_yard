import { ADD, GET_TODO_SUCCESS, POST_TODO_SUCCESS, REDUCE, TODO_FAILURE, TODO_REQUEST } from "./actionTypes"

export const addAction = (payload) => {
    return { type: ADD, payload: payload }
}

export const reduceAction = (payload) => {
    return { type: REDUCE, payload: payload }
}
//TODOS
export const todoRequestAction = () => {
    return { type: TODO_REQUEST }
}
export const todoFailureAction = () => {
    return { type: TODO_FAILURE }
}
export const todoSuccessAction = (payload) => {
    return { type: GET_TODO_SUCCESS, payload: payload }
}

export const todoPostSuccessAction = (payload) => {
    return { type: POST_TODO_SUCCESS, payload: payload }
}