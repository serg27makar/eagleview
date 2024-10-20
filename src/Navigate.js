import React from 'react';
import {Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

export default function Navigate() {
    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Registration}/>
            <Route path='/home' component={Home}/>
        </Switch>
    );
}