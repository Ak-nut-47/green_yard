import { ADD, GET_TODO_SUCCESS, POST_TODO_SUCCESS, REDUCE, TODO_FAILURE, TODO_REQUEST } from "./actionTypes"

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD:
            return { ...state, counter: state.counter + payload }
        case REDUCE:
            return { ...state, counter: state.counter - payload }
        case TODO_REQUEST:
            return { ...state, isLoading: true }
        case TODO_FAILURE:
            return { ...state, isError: true }
        case GET_TODO_SUCCESS:
            return { ...state, isLoading: false, todos: payload }
        case POST_TODO_SUCCESS:
            return { ...state, isLoading: false, todos: [...state.todos, payload] }
        default:
            return state
    }
}