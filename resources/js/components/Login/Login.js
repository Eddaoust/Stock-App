import React, {Component} from 'react';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import classes from '../Login/Login.module.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

//TODO implement front validation on user input

class Login extends Component {
    componentWillUnmount() {
        this.props.clearError();
    }

    render() {
        // Render the spinner on loading
        let avatar = '';
        if (this.props.login.loading) {
            avatar = <CircularProgress className={classes.progress} color="secondary" />;
        } else {
            avatar = <Avatar className={classes.Avatar}><LockOutlinedIcon/></Avatar>;
        }
        // Add fields error props
        let error = false;
        let helperText = '';
        if (this.props.login.error) {
            error = true;
            helperText = 'Email ou mot de passe non valide'
        }

        if (this.props.user.status === 'auth' && !this.props.login.error) {
            return <Redirect to="/app"/>;
        } else {
            return (
                <Grid container className={classes.Root}>
                    <Grid item xs={false} sm={4} md={7} className={classes.Image} />
                    <Grid item xs={12} sm={8} md={5} elevation={6}>
                        <div className={classes.Paper}>
                            {avatar}
                            <Typography component="h1" variant="h5">
                                Connexion
                            </Typography>
                            <form className={classes.Form} onSubmit={e => {
                                e.preventDefault()
                                this.props.onLogin(e)}
                            }>
                                <TextField
                                    error={error}
                                    helperText={helperText}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    autoFocus
                                />
                                <TextField
                                    error={error}
                                    helperText={helperText}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mot de passe"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.Submit}
                                >
                                    Connexion
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Mot de passe oublié?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <RouterLink to="/registration">Créer un compte</RouterLink>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            )
        }
    };
}

export default Login;
