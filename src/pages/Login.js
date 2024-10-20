import React, {useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import '../index.css'
import axios from 'axios'
import {Translator} from "../utils/translator/lang";


async function loginUser(data) {
    const api = axios.create({
        timeout: 5800,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return api.post('http://localhost:8080/login', data)
        .then(res => res.data)
}

export default function Login({setToken, changeScreen}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const state = useSelector(state => state.lang);

    const handleSubmit = async e => {
        const postData = {
            email,
            password
        }
        const result = await loginUser(postData);
        if (result && result.errMsg) {
            NotificationManager.warning(Translator(state.lang, "AuthError"), "", 5000)
        } else {
            setToken(result);
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
                        <div className="linkBtn" onClick={() => changeScreen(false)}>Registration</div>
                    </div>
                </div>

            </div>
            <NotificationContainer/>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};