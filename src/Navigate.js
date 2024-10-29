import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Cabinet from "./pages/Cabinet";
import {useSelector} from "react-redux";
import Camera from "./pages/Camera";
import Statistic from "./pages/Statistic";
import Settings from "./pages/Settings";

export default function Navigate() {
    const state = useSelector(state => state.user);
    const token = !state.appToken || state.appToken === "" ? null : state.appToken;

    return (
        <Switch>
            { token ? (
                <>
                    <Route exact path="/" component={Camera} />
                    <Route path="/camera" component={Camera} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/statistic" component={Statistic} />
                    <Route path="/cabinet" component={Cabinet} />
                    <Route path="*">
                        <Redirect to="/camera" />
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