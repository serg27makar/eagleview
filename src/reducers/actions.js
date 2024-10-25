import {SET_TOKEN, SET_USER, SHOW_ALERT_MODAL} from "./types";

export const showAlertModal = data => {
    return {
        type: SHOW_ALERT_MODAL,
        payload: data
    }
};

export const setToken = data => {
    return {
        type: SET_TOKEN,
        payload: data
    }
};

export const setUser = data => {
    return {
        type: SET_USER,
        payload: data
    }
};
