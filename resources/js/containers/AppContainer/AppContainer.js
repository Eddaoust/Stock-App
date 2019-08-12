import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Login from '../../pages/Login';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/Navbar/Navbar';

function AppContainer() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Container maxWidth="lg">
                <Route path="/" component={Login}/>
            </Container>
        </BrowserRouter>
    );
}

export default AppContainer;
