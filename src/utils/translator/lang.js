import {ua} from "./langs/ua"
import {ru} from "./langs/ru"
import {en} from "./langs/en"
import {langs} from "../const/const";
import {useSelector} from "react-redux";

export const Translator = (val) => {
    const state = useSelector(state => state.lang);

    switch (state.lang) {
        case langs.UA:
            return ua[val] || val;
        case langs.RU:
            return ru[val] || val;
        case langs.EN:
            return en[val] || val;
        default: return ua[val];
    }
}