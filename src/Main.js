import React from 'react';
import Header from "./components/Header";
import Navigate from "./Navigate";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import "./access/styles/style.css"
import AlertModal from "./components/modals/AlertModal";

const history = createBrowserHistory();

function Main() {

    return (
        <div className="wrapper">
            <Router history={history}>
                <Header/>
                <Navigate/>
            </Router>
            <AlertModal/>
        </div>

    );
}

export default Main;