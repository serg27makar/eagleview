import {combineReducers} from "redux";
import {langReducer} from "./langReducer";
import {modalReducer} from "./modalReducer";

export const RootReducer = combineReducers({
    lang: langReducer,
    alertModal: modalReducer
})