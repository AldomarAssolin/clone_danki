import React from "react";
import styled from "styled-components";
import NavItem from "../../../assistants/NavItem";

const Cadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;

    a{
        margin-left: 9px;
    }

    a.btn-enter{
        padding: 6px 19px;
        margin: 0 8px;
        letter-spacing: -.3px;
        text-decoration: none;

        font-size: 11px;
        font-weight: 700;
        border-radius: 30px;
    }
    a.btn-mat{
        padding: 5px 19px;
        margin: 0 8px;
        letter-spacing: -.3px;
        text-align: center;
        text-decoration: none;

        font-size: 11px;
        font-weight: 700;
        border-radius: 30px;
    }

    @media(max-width:1200px){
        width: 100%;
        padding: 30px;
        background: #4F3180;
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Cadastro>
            <NavItem 
                classes="btn-enter" 
                bg="#fff"
                color="#5E3EA1"
                href="/Login">
                ENTRAR
            </NavItem>
            <NavItem 
                classes="btn-mat" 
                border="1px solid #fff"
                href="/Matricula">
                MATRICULE-SE GRÁTIS
            </NavItem>
        </Cadastro>
    )
}