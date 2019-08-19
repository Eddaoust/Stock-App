import Registration from '../../components/Registration/Registration';
import {connect} from 'react-redux';
import {registrationProcess} from '../../actions/users';


const mapStateToProps = state => {
    return {
        accessToken: state.accessToken,
        loading: state.loading,
        error: state.error,
        isRegister: state.isRegister
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegistration: (e) => {
            dispatch(registrationProcess({
                firstname: e.target.querySelectorAll('input')[0].value,
                lastname: e.target.querySelectorAll('input')[1].value,
                email: e.target.querySelectorAll('input')[2].value,
                password: e.target.querySelectorAll('input')[3].value,
                password_confirmation: e.target.querySelectorAll('input')[4].value,
            }))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
