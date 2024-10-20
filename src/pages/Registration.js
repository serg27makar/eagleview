import React, {useState} from 'react';
import '../index.css'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from "react-notifications";
import 'react-notifications/lib/notifications.css';
import {Link} from "react-router-dom";
import {Translator} from "../utils/translator/lang";
import {useSelector} from "react-redux";

async function submitUser(data) {
    return axios.post('http://localhost:8080/register', data)
        .then(res => res.data)
}

export default function Registration() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const state = useSelector(state => state.lang);

    const handleSubmit = async () => {
        const postData = {
            firstName,
            lastName,
            email,
            password
        }
        if (firstName && lastName && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                NotificationManager.warning("не вірно підтвердженний пароль", "", 5000)
                return;
            }
            const result = await submitUser(postData);
            if (result && result.errMsg) {
                NotificationManager.warning(result.errMsg, "", 5000)
            } else {
                NotificationManager.warning(result.errMsg, "", 5000)
            }
        } else {
            NotificationManager.warning("Всі поля повинні бути заповнені", "", 5000)
        }
    }

    return (
        <div className="mainWrapper">
            <div className="form">
                <div className="form-body">
                    <div className="inputWrapper">
                        <label>First Name </label>
                        <input type="text" onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="inputWrapper">
                        <label>Last Name </label>
                        <input type="text" onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="inputWrapper">
                        <label>Email </label>
                        <input type="email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="inputWrapper">
                        <label>Password </label>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="inputWrapper">
                        <label>Confirm Password </label>
                        <input type="password" onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => handleSubmit()} type="submit" className="btn">Register</button>
                    <Link to="/login"><div className="loginBtn">{Translator(state.lang, "SignIn")}</div></Link>
                </div>
            </div>
            <NotificationContainer/>
        </div>

    )
}