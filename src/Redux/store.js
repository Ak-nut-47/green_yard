import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const initialState = {
    plantsData: [],
    counter: 0,
    isLoading: false,
    todos: [],
    isError: false,
};
export const store = legacy_createStore(reducer, initialState);
