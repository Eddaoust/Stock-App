import Category from '../../components/Category/Category';
import {connect} from 'react-redux';
import {categoryFetchProcess} from "../../actions/categories";

const mapStateToProps = state => {
    return {
        user: state.user,
        category: state.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        categoryFetch: (user_id, token) => dispatch(categoryFetchProcess(user_id, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
