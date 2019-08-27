import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import CategoryContainer from "../containers/CategoryContainer/CategoryContainer";
import ResDrawer from '../components/Category/ResDrawer';

const Stock = () => {
    return(
        <div>
            <Navbar/>
            <ResDrawer/>
        </div>
    );
}

export default Stock;
