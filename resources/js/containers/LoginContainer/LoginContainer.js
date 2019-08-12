import Login from '../../components/Login/Login';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        isAuth: state.isAuthenticated,
        accessToken: state.accessToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch({type: 'LOGIN', isAuth: true}),
        onLogout: () => dispatch({type: 'LOGOUT', isAuth: false}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
