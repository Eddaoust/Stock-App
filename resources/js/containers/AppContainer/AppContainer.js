import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../../pages/Login';
import Registration from "../../pages/Registration";
import Stock from '../../pages/Stock';

function AppContainer() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/stock" component={Stock}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppContainer;
