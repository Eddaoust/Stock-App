import React, {Component} from 'react';

class Category extends Component {
    componentDidMount() {
        this.props.categoryFetch(this.props.user.id, this.props.accessToken)
    }

    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

export default Category;
