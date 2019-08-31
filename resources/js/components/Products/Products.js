import React, {useEffect} from 'react';

function Products(props) {
    // Get the user products on mount
    useEffect(() =>{
        props.productsFetch(props.user.data.id, props.user.data.accessToken)
    }, []);

    return (
        <div><h1>Products</h1></div>
    );
}

export default Products;
