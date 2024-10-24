import React, {useState} from 'react';
import 'react-notifications/lib/notifications.css';
import '../index.css'
import '../access/styles/login.css'
import {Translator} from "../utils/translator/lang";
import {loginUser} from "../utils/services/apiService";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {showAlertModal} from "../reducers/actions";

export default function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        const postData = {
            email,
            password
        }
        const result = await loginUser(postData);
        if (!result) {
            dispatch(showAlertModal({
                title: "AuthError",
                message: "Auth Error"
            }));
        } else {
            dispatch(showAlertModal({
                message: "AuthError"
            }));
        }
    }

    return (
        <div className="loginScreen">
            <h1 className="titleLogin">{Translator('Login')}</h1>
            <div className="formBox">
                <label className="formLabel" htmlFor="email">
                    <span className="formInputLabel">{Translator('EnterYourEmail')}</span>
                    <input className="formInput" type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label className="formLabel" htmlFor="password">
                    <span className="formInputLabel">{Translator('EnterYourPassword')}</span>
                    <input className="formInput" type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <span className="forgetText">{Translator('ForgotPassword')}</span>
                <button className="submitBtn" onClick={handleSubmit}>{Translator('LogInAccount')}</button>
                <hr color="#5F78D380" size="1"/>
                <div className="footerText">{Translator('NotMemberYet')}<Link to={"/registration"}><em>{Translator('Registration')}</em></Link></div>
            </div>
        </div>
    )
}