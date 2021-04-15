import { createStore } from "redux";

const initialState = {
    name: "Janet",
    count: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "CHANGE_COUNT"){
        return {
            ...state,
            count: action.payload
        }
    }
    if (action.type === "CHANGE_NAME"){
        return {
            ...state,
            name: action.payload
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;