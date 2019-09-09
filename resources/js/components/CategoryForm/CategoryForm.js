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
        error = true;
        helperText = props.category.error.data.errors.name[0]
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
                            Ajouter une catégorie
                        </Typography>
                        <form onSubmit={event => {
                            event.preventDefault();
                            props.categoryCreate(event, props.user.data.accessToken)
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