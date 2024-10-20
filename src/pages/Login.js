import React, {useState} from 'react';
import 'react-notifications/lib/notifications.css';
import {useSelector} from "react-redux";
import '../index.css'
import '../access/styles/login.css'
import {Translator} from "../utils/translator/lang";
import loginUser from "../utils/services/apiService";
import {Link} from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const state = useSelector(state => state.lang);

    const handleSubmit = async e => {
        const postData = {
            email,
            password
        }
        const result = await loginUser(postData);
        if (!result) {
            alert(Translator(state.lang, "AuthError"))
        } else {
        // todo
        }
    }

    return (
        <div className="loginScreen">
            <div className="formBox">
                <h1 className="titleLogin">{Translator(Login)}</h1>
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
                <div className="footerText">{Translator('NotMemberYet')}<Link to={"/registration"}><em>{Translator('Registration')}</em></Link></div>

            </div>
        </div>
    )
}