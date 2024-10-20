import React, {useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {useSelector} from "react-redux";
import '../index.css'
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
            NotificationManager.warning(Translator(state.lang, "AuthError"), "", 5000)
        } else {
            NotificationManager.warning(Translator(state.lang, "Registration"), "center", 5000)
        }
    }

    return (
        <div className="mainWrapper">
            <div className="form">
                <div className="form-body">
                    <h1 className="title">Please Log In</h1>
                    <div className="inputWrapper">
                        <label>Email</label>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="inputWrapper">
                        <label>{Translator(state.lang, "Password")}</label>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="footer">
                        <button className="btn" type="submit" onClick={() => handleSubmit()}>Login</button>
                        <Link to="/registration"><div className="registerBtn">{Translator(state.lang, "SignUp")}</div></Link>
                    </div>
                </div>

            </div>
            <NotificationContainer/>
        </div>
    )
}