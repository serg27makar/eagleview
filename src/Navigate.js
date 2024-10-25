import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import {useSelector} from "react-redux";

export default function Navigate() {
    const state = useSelector(state => state.user);
    const token = state.appToken;

    return (
        <Switch>
            {token ? (
                <>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="*">
                        <Redirect to="/home" />
                    </Route>
                </>
            ) : (
                <>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Route path="*">
                        <Redirect to="/login" />
                    </Route>
                </>
            )}
        </Switch>
    );
}