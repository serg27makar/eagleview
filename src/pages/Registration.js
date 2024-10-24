import React, {useState} from 'react';
import '../index.css'
import 'react-notifications/lib/notifications.css';
import {Link} from "react-router-dom";
import {Translator} from "../utils/translator/lang";
import {submitUser} from "../utils/services/apiService";
import {useDispatch} from "react-redux";
import {showAlertModal} from "../reducers/actions";


export default function Registration() {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const postData = {
            userName,
            email,
            phone,
            password
        }
        if (userName && email && phone && password && confirmPassword) {
            if (password !== confirmPassword) {
                dispatch(showAlertModal({
                    message: "не вірно підтвердженний пароль"
                }));
                return;
            }
            const result = await submitUser(postData);
            if (result && result.errMsg) {
                dispatch(showAlertModal({
                    title: "AuthError",
                    message: result.errMsg
                }));
            } else {
                dispatch(showAlertModal({
                    title: "AuthError",
                    message: result.errMsg
                }));
            }
        } else {
            dispatch(showAlertModal({
                message: "Всі поля повинні бути заповнені"
            }));
        }
    }

    return (
        <div className="registrationScreen">
            <h1 className="titleLogin">{Translator('Registration')}</h1>
            <div className="formBox">
                <label className="formLabel" htmlFor="userName">
                    <span className="formInputLabel">{Translator('EnterYourName')}</span>
                    <input className="formInput" type="text" name="userName" placeholder="Name" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label className="formLabel" htmlFor="email">
                    <span className="formInputLabel">{Translator('EnterYourEmail')}</span>
                    <input className="formInput" type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label className="formLabel" htmlFor="phone">
                    <span className="formInputLabel">{Translator('EnterYourPhone')}</span>
                    <input className="formInput" type="phone" name="phone" placeholder="phone" onChange={e => setPhone(e.target.value)}/>
                </label>
                <label className="formLabel" htmlFor="password">
                    <span className="formInputLabel">{Translator('EnterYourPassword')}</span>
                    <input className="formInput" type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <label className="formLabel" htmlFor="confirmPassword">
                    <span className="formInputLabel">{Translator('RepeatYourPassword')}</span>
                    <input className="formInput" type="password" name="confirmPassword" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)}/>
                </label>
                <button className="submitBtn signUpBtn" onClick={handleSubmit}>{Translator('SignUp')}</button>
                <hr color="#5F78D380" size="1"/>
                <div className="footerText">{Translator('AlreadyHaveAccount')}<Link to={"/login"}><em>{Translator('SignIn')}</em></Link></div>
            </div>
        </div>

    )
}