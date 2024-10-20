import { CHANGE_LANG } from "./types";
import {langs} from "../utils/const/const";

const initialState = {
    lang: langs.UA,
}

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANG:
            return {...state, lang: action.payload}
        default:
            return state
    }
};