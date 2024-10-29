import {SHOW_ADD_CAMERA_MODAL, SHOW_ALERT_MODAL} from "./types";

const initialState = {
    showAlertData: null,
    showAddCameraModal: null,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT_MODAL:
            return {...state, showAlertData: action.payload}
        case SHOW_ADD_CAMERA_MODAL:
            return {...state, showAddCameraModal: action.payload}
        default:
            return state
    }
};