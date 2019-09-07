import {connect} from 'react-redux';
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import {categoryCreateProcess} from "../../actions/categories";

const mapStateToProps = state => {
    return {
        user: state.user,
        category: state.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        categoryCreate: (event, token) => dispatch(categoryCreateProcess({
            name: event.target.querySelectorAll('input')[0].value,
            user_id: event.target.querySelectorAll('input')[1].value,
        }, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
