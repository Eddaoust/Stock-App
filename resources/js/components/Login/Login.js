import React, {Component} from 'react';
import classes from '../Login/Login.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
    render() {
        let login = {};
        if (this.props.isAuth) {
            login = <h1>Vous êtes connecté</h1>
        } else {
            login = (
                <div className={classes.LoginForm}>
                    <h1>Login</h1>
                    <TextField className={classes.LoginItems} type="text" label="Email" id="username" name="username" variant="outlined"/>
                    <TextField className={classes.LoginItems} type="password" label="Password" id="username" name="username" variant="outlined"/>
                    <Button className={classes.LoginItems} variant="contained" color="primary" onClick={this.props.onLogin}>Se connecter</Button>
                </div>);
        }

        return(
            login
        );
    };
}

export default Login;
