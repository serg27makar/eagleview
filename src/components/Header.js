import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Translator} from "../utils/translator/lang";

export default function Header() {

    const state = useSelector(state => state.lang);

    return (
        <div className="headerBlock">
            <div className="backgroundImgCompos">
                <div className="bgImg1"/>
                <div className="bgImg2"/>
            </div>
            <div className="logoBlock">
                <img className="logoImg" src="../access/images/logo.svg" alt="logo"/>
                <div className="logoTextBlock">
                    <span className="logoTitle"><em>Eagle</em>view</span>
                    <span className="logoSlog">{Translator(state.lang, "SmartCCTV")}</span>
                </div>
            </div>
            <div className="aboutService">{Translator(state.lang, "AboutService")}</div>
            <div className="aboutService">{Translator(state.lang, "FrequentlyQuestions")}</div>
            <Link to="/login"><div className="loginBtn">{Translator(state.lang, "SignIn")}</div></Link>
            <Link to="/registration"><div className="registerBtn">{Translator(state.lang, "SignUp")}</div></Link>
        </div>
    )
}