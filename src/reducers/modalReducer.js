import {SHOW_ALERT_MODAL} from "./types";

const initialState = {
    showAlertData: null,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT_MODAL:
            return {...state, showAlertData: action.payload}
        default:
            return state
    }
};