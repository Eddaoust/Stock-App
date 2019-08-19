import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Login from '../../pages/Login';
import Registration from "../../pages/Registration";

function AppContainer() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
        </BrowserRouter>
    );
}

export default AppContainer;
