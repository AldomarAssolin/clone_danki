/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components';

import NavItem from '../../../assistants/NavItem';


const DivMenu = styled.div`
    width: 100%;
    height: 0;
    /* position: absolute;z-index:999; */

    /* background: #000000d9; */
    .menu{
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        li{
            position: relative;
            padding: 9px 0;
            font-family: 'Lato', sans-serif;
            list-style: none;
      }
        a{
            text-decoration: none;
        }
}

    @media screen and (max-width:1200px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Span = styled.div`
position: absolute;
right:-19px;
top:-5px;
color:#fff;

font-size:9px;
padding:4px 9px;
border-radius:9px;
background: #e7426b;
`

export default function MenuMobile() {
  return (
    <DivMenu>
      <div className="menu">
        <li>
          <NavItem href="/" id="home" color="#5E3EA1">
            Home
          </NavItem>
        </li>
        <li>
          <NavItem href="/Cursos" id="cursos" color="#5E3EA1">
            Cursos
          </NavItem>
        </li>
        <li>
          <span>
            <a href="https://cursos.dankicode.com/vitalicio" target="_blank" id="plano" color="#5E3EA1">
              Plano Vitalício
            </a>
            <Span>inédito</Span>
          </span>
        </li>
        <li>
          <NavItem href="/Certificados" id="certificados" color="#5E3EA1">
            Certificados
          </NavItem>
        </li>
        <li>
          <a href="https://blog.dankicode.com" target="_blank" id="blog" color="#5E3EA1">
            Blog
          </a>
        </li>
        <li>
          <NavItem href="/Forum" id="forum" color="#5E3EA1">
            Fórum
          </NavItem>
        </li>
        <li>
          <NavItem href="/Ensine" id="ensine" color="#5E3EA1">
            Ensine na Danki
          </NavItem>
        </li>
      </div>
    </DivMenu>
  );
}
