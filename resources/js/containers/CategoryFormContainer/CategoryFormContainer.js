import {connect} from 'react-redux';
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import {categoryCreateProcess, categoryEditProcess} from "../../actions/categories";

const mapStateToProps = state => {
    return {
        user: state.user,
        category: state.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        categoryCreate: (event, token, props) => dispatch(categoryCreateProcess({
            name: event.target.querySelectorAll('input')[0].value,
            user_id: event.target.querySelectorAll('input')[1].value,
        }, token, props)),
        categoryEdit: (event, token, props) => dispatch(categoryEditProcess({
            name: event.target.querySelectorAll('input')[0].value,
            user_id: event.target.querySelectorAll('input')[1].value,
        }, token, props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
