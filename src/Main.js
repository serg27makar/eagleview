import React from 'react';
import Header from "./components/Header";
import Navigate from "./Navigate";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function Main() {

    return (
        <Router history={history} className="wrapper">
            <div className="wrapper">
                <Header/>
                <Navigate/>
            </div>
        </Router>
    );
}

export default Main;