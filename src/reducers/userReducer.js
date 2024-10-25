import {SET_TOKEN, SET_USER} from "./types";

const initialState = {
    appToken: null,
    userInfo: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, appToken: action.payload}
        case SET_USER:
            return {...state, userInfo: action.payload}
        default:
            return state
    }
};