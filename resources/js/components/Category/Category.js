import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


class Category extends Component {
    componentDidMount() {
        this.props.categoryFetch(this.props.user.data.id, this.props.user.data.accessToken)
    }
/*
    categories() {
        if (this.props.category.data) {
            return this.props.category.data.map(mainCategories => {
                return (
                    <div key={mainCategories.id}>
                        <MenuItem>{mainCategories.name}</MenuItem>
                        <MenuList>
                            {mainCategories.children.map(subCategories => {
                                return (
                                    <MenuItem key={subCategories.id}>{subCategories.name}</MenuItem>
                                );
                            })}
                        </MenuList>

                    </div>
                );
            })
        }
    }*/

    render() {
        return (
            <Drawer
                variant="permanent"
                anchor="left"
                open="true"
            >
                <Menu>
                    <MenuList>
                        <MenuItem>Ajouter un produit</MenuItem>
                        <MenuItem>Ajouter une catégorie</MenuItem>
                    </MenuList>
                </Menu>
            </Drawer>
        );
    }
}

export default Category;
