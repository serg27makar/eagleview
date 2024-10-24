import {SHOW_ALERT_MODAL} from "./types";

export const showAlertModal = data => {
    return {
        type: SHOW_ALERT_MODAL,
        payload: data
    }
};
