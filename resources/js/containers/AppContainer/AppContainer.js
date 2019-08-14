import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Login from '../../pages/Login';

function AppContainer() {
    return (
        <BrowserRouter>
            <Route path="/" component={Login}/>
        </BrowserRouter>
    );
}

export default AppContainer;
