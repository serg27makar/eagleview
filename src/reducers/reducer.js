import {combineReducers} from "redux";
import {langReducer} from "./langReducer";

export const RootReducer = combineReducers({lang: langReducer})