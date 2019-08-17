import Login from '../../components/Login/Login';
import {connect} from 'react-redux';
import {loginProcess} from '../../actions/users';


const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        accessToken: state.accessToken,
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (e) => {
            dispatch(loginProcess({
                email: e.target.querySelectorAll('input')[0].value,
                password: e.target.querySelectorAll('input')[1].value
            }))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
