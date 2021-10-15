/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import NavItem from "../../../assistants/NavItem";

const Navbar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 5;
    font-family: 'Lato', sans-serif;
    font-weight: bold;

    span{
        position: relative;
    }
    a{
        position:relative;
        text-decoration: none;
        color: #fff;
        margin-left: 32px;
        font-size:15px;
    }
    a:hover{
        opacity: 0.6;
    }

    @media(max-width:1200px){
        display: none;
    }
`;
 const Span = styled.div`
    position: absolute;
    right:-12px;
    top:-16px;
    color:#fff;

    font-size:9px;
    padding:4px 9px;
    border-radius:9px;
    background: #e7426b;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Navbar>
                <NavItem href="/">
                    Home
                </NavItem>
                <NavItem href="/Cursos">
                    Cursos
                </NavItem>
                <span>
                    <a href="https://cursos.dankicode.com/vitalicio" target="_blank">
                        Plano Vitalício
                    </a>
                    <Span>inédito</Span>
                </span>
                <NavItem href="/Certificados">
                    Certificados
                </NavItem>
                <a href="https://blog.dankicode.com" target="_blank">
                    Blog
                </a>
                <NavItem href="/Forum">
                    Fórum
                </NavItem>
                <NavItem href="/Ensine">
                    Ensine na Danki
                </NavItem>
        </Navbar>
    )
}