import Login from '../../components/Login/Login';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/users';


const mapStateToProps = state => {
    return {
        isAuth: state.isAuthenticated,
        accessToken: state.accessToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (e) => loginUser({
            email: e.target.querySelectorAll('input')[0].value,
            password: e.target.querySelectorAll('input')[1].value
        }),
        onLogout: () => dispatch({type: 'LOGOUT', isAuth: false}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
