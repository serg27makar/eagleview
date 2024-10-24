import {Link} from "react-router-dom";
import {Translator} from "../utils/translator/lang";
import "../access/styles/header.css";

export default function Header() {

    return (
        <div className="headerBlock">
            <div className="backgroundImgCompos">
                <div className="bgImg1"/>
                <div className="bgImg2"/>
            </div>
            <div className="logoBlock">
                <img className="logoImg" src="../images/logo.svg" alt="logo"/>
                <div className="logoTextBlock">
                    <span className="logoTitle"><em>Eagle</em>view</span>
                    <span className="logoSlog">{Translator("SmartCCTV")}</span>
                </div>
            </div>
            <div className="aboutService">{Translator("AboutService")}</div>
            <div className="aboutService">{Translator("FrequentlyQuestions")}</div>
            <Link to="/login"><div className="loginBtn">{Translator("SignIn")}</div></Link>
            <Link to="/registration"><div className="registerBtn">{Translator("SignUp")}</div></Link>
        </div>
    )
}