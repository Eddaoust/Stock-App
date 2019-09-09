import React, {useEffect} from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProductsContainer from "../../containers/ProductsContainer/ProductsContainer";
import CategoryFormContainer from "../../containers/CategoryFormContainer/CategoryFormContainer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: 64
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function Category(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    // Get the user categories on mount
    useEffect(() =>{
        props.categoryFetch(props.user.data.id, props.user.data.accessToken)
    }, []);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    function handleMenuItemClick(event, index) {
        setSelectedIndex(index);
        props.history.push({
            pathname: '/stock',
            state: {catId: index}
        })
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider/>
            <List>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText><Link to="/stock/cat">Ajouter une catégorie</Link></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText>Ajouter un produit</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText><Link to='/stock'>Toutes les catégories</Link></ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                {/*TODO Sort by alphabetical order*/}
                {props.category.data ? props.category.data.map(category => (
                    <div key={category.id}>
                        <ListItem button key={category.id}
                                  onClick={event => handleMenuItemClick(event, category.id)}
                                  selected={category.id === selectedIndex}>
                            <ListItemText>{category.name}</ListItemText>
                        </ListItem>
                        <List className={classes.nested}>
                            {category.children.map(subCategory => (
                                <ListItem button key={subCategory.id}
                                          onClick={event => handleMenuItemClick(event, subCategory.id)}
                                          selected={subCategory.id === selectedIndex}>
                                    <ListItemText>{subCategory.name}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                )): ''}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Stock App
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <main className={classes.content}>
                <Switch>
                    <Route path="/stock/cat" exact component={CategoryFormContainer}/>
                    <Route path="/stock" component={ProductsContainer}/>
                </Switch>
            </main>
        </div>
    );
}

Category.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default withRouter(Category);

