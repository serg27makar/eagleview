import { SHOW_ADD_BTN } from "./types";

const initialState = {
    isShowAddBtn: true,
}

export const cameraReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_BTN:
            return {...state, isShowAddBtn: action.payload}
        default:
            return state
    }
};