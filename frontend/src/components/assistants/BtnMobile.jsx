/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

import MobileIcon from "../../assets/images/menu-mobile.png"

const DivBtnMenu = styled.div`
    width: 100%;
    display: none;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width:1200px){
        display: flex;
    }
`

const BtnMobile = styled.span`
    display: block;
    margin-right: 36px;
    cursor: pointer;
`

export default props => {
    return(
        <DivBtnMenu>
            <BtnMobile>
                <img src={MobileIcon} alt="menu icon"/>
            </BtnMobile>
        </DivBtnMenu>
    )
}