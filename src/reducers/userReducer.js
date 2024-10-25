import {SET_TOKEN, SET_USER} from "./types";

const initialState = {
    appToken: localStorage.getItem('token'),
    userInfo: localStorage.getItem('userInfo'),
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            const appToken = action.payload;
            localStorage.setItem('token', JSON.stringify(appToken));
            return {...state, appToken }
        case SET_USER:
            const {userInfo} = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            return {...state, userInfo}
        default:
            return state
    }
};