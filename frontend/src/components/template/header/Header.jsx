import React from "react";
import styled from "styled-components";

import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import Cadastro from "./cadastro/Cadastro";

const Header = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #5E3EA1;

    @media(max-width:1200px){
        display: flex;
        flex-direction: column;
        flex-direction: column-reverse;
        padding: 0;
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Header>
                <Logo/>
                <Nav/>
                <Cadastro/>
        </Header>
    )
}