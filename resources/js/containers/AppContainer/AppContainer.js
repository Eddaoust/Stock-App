import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Login from '../../pages/Login';
import Registration from "../../pages/Registration";
import Stock from '../../pages/Stock';

function AppContainer() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/stock" component={Stock}/>
        </BrowserRouter>
    );
}

export default AppContainer;
