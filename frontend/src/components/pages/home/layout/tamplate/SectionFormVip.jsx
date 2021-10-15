import React from "react";
import styled from "styled-components";
import NavItem from "../../../../assistants/NavItem";

const DivForm = styled.div`
    width: 100%;
    padding: 40px 30px;
    font: 16px lato;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #4C3282;

    .form{
        width: 100%;
        padding-top: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input[type="email"], a{
            width: 100%;
            max-width: 550px;
            height: 40px;
            padding-left: 12px;
            margin-bottom: 8px;

            font: 16px lato;
            border: 1px solid #ccc;
            background: #fff;
            outline: none;
        }

        a{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            text-decoration: none;
            font: 700 21px lato;
        }
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <DivForm>
            <h2>Deseja entrar na nossa lista VIP e Assistir Aulas Grátis?</h2>
            <form action="" method="" className="form">
                <input type="email" name="email" placeholder="Qual seu melhor e-mail?"/>
                <NavItem 
                    bg="#e7426b"
                    href="/">{/* Redirecionar para página Campus */}
                    receber acesso
                </NavItem>
            </form>
        </DivForm>
    )
}