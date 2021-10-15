import React from "react";
import styled from "styled-components";

import images from '../../../../assets/images/danki_logo.png'
import BtnMobile from "../../../assistants/BtnMobile";
import NavItem from "../../../assistants/NavItem";


const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width:1200px){
        width: 100%;
        padding: 30px;
        flex-direction: row;
    }
`;

const Img = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Logo>
            <Img>
                <NavItem href="/">
                    <img src={images} alt="logomarca" width="100px"/>
                </NavItem>
            </Img>
            <BtnMobile/>
        </Logo>
    )
}