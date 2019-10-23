import React from "react";
import classes from '../CategoryForm/CategoryForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function CategoryForm(props) {

    // Add fields error props
    let error = false;
    let helperText = '';
    if (props.category.error) {
        props.category.error.data.errors.name.map(e => {
            if (e === 'The name must be at least 2 characters.') {
                error = true;
                helperText = "La catégorie doit faire au moins 2 caractères.";
            } else if (e === 'The name may not be greater than 30 characters.') {
                error = true;
                helperText = "La catégorie doit faire au maximum 30 caractères.";
            } else if (e === 'The name must be a string.') {
                error = true;
                helperText = "La catégorie doit être une chaine de caractère.";
            }
        })
    }

    let name = ''
    let action = 'Ajouter'
    let input = ''
    if (props.location.state) {
        name = props.location.state.categoryName
        action = 'Modifier'
        input = <Input
            name="category_id"
            required
            id="category_id"
            type="hidden"
            value={props.location.state.categoryId}
        />
    }

    return (
        <div className={classes.Content}>
            <Paper className={classes.Paper}>
                <Grid
                container
                direction="row"
                justify="center">
                    <Grid item >
                        <Typography
                            component="h1"
                            variant="h5"
                            align="center"
                            className={classes.Title}>
                            {`${action} une catégorie`}
                        </Typography>
                        <form onSubmit={event => {
                            event.preventDefault();
                            if (props.location.state) {
                                console.log('EDIT CAT')
                            } else {
                                props.categoryCreate(event, props.user.data.accessToken, props)
                            }

                            event.target.querySelectorAll('input')[0].value = ''
                        }}>
                            <TextField
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Catégories"
                                autoFocus
                                type="text"
                                error={error}
                                helperText={helperText}
                                {props.location.state ? value = name : ''}
                            />
                            <Input
                                name="user_id"
                                required
                                id="user_id"
                                type="hidden"
                                value={props.user.data.id}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.Button}
                            >
                                Ajouter
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}

export default CategoryForm;
