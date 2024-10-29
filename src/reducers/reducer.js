import {combineReducers} from "redux";
import {langReducer} from "./langReducer";
import {modalReducer} from "./modalReducer";
import {userReducer} from "./userReducer";

export const RootReducer = combineReducers({
    lang: langReducer,
    modal: modalReducer,
    user: userReducer,
})