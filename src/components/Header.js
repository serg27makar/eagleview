import {FaDoorOpen, FaUserAlt} from "react-icons/fa";
import React from 'react';
import {Link} from "react-router-dom";
import {Translator} from "../utils/translator/lang";
import "../access/styles/header.css";
import {useSelector} from "react-redux";
import Translate from "../utils/translator/Translate";

export default function Header() {
    const state = useSelector(state => state.user);
    const token = state.appToken;
    const user = state.userInfo;

    const viewButtons = () => {
        return (
            <>
                <Link to="/login">
                    <div className="loginBtn"><Translate text={"SignIn"} /></div>
                </Link>
                <Link to="/registration">
                    <div className="registerBtn"><Translate text={"SignUp"} /></div>
                </Link>
            </>
        )
    }

    const viewUserInfo = () => {
        console.log()
        return (
            <div className="userBlock">
                <div><FaUserAlt className="userInfoBtn"/><Translate text={user.userInfo.firstName} /></div>
                <div><FaDoorOpen className="userInfoBtn"/><Translate text={"Logout"} /></div>
            </div>
        )
    }

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
            {!token ? viewButtons() : viewUserInfo()}
        </div>
    )
}