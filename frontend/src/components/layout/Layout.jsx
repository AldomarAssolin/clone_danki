import React from "react";
import { HashRouter } from 'react-router-dom'

import Header from "../template/header/Header";
import Routes from "../template/main/Routes";
import Footer from "../template/footer/Footer";
import MenuMobile from "../template/header/nav_mobile/Mobile.jsx";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <HashRouter>
            <Header/>
            <MenuMobile/>
            <Routes/>
            <Footer/>
        </HashRouter>
    )
}