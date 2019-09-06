import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

function CategoryForm(props) {
    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                props.categoryCreate(event, props.user.data.accessToken)
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
                >
                    Ajouter
                </Button>
            </form>
        </div>
    );
}

export default CategoryForm;
