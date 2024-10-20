import {ua} from "./langs/ua"
import {ru} from "./langs/ru"
import {en} from "./langs/en"
import {langs} from "../const/const";

export const Translator = (lang, val) => {
    switch (lang) {
        case langs.UA:
            return ua[val];
        case langs.RU:
            return ru[val]
        case langs.EN:
            return en[val]
        default: return ua[val];
    }
}