import {combineReducers} from "redux";
import {langReducer} from "./langReducer";
import {modalReducer} from "./modalReducer";
import {userReducer} from "./userReducer";
import {cameraReducer} from "./cameraReducer";

export const RootReducer = combineReducers({
    lang: langReducer,
    modal: modalReducer,
    user: userReducer,
    cameras: cameraReducer,
})