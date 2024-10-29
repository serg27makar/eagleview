import {SET_TOKEN, SET_USER} from "./types";

const initialState = {
    appToken: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            const {appToken} = action.payload;
            if (appToken) localStorage.setItem('token', JSON.stringify(appToken))
            else localStorage.removeItem('token')
            return {...state, appToken }
        case SET_USER:
            const {userInfo} = action.payload;
            if (userInfo) localStorage.setItem('userInfo', JSON.stringify(userInfo))
            else localStorage.removeItem('userInfo')
            return {...state, userInfo}
        default:
            return state
    }
};