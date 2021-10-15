import React from "react";
import styled from 'styled-components'

const TitleCurso = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding: 90px 20px 30px;

    @media(max-width:768px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        padding: 30px 20px 30px;
    }
`
const TitleName = styled.div`
    display: flex;
    align-items: flex-end;
    max-width: 500px;
    width: 70%;
    padding: 15px 20px;
    margin-right: 20px;

    font-family: lato;
    font-weight: 300;
    border-radius: 12px;
    i{
        margin-right: 10px;
    }

    span{
        font-size: 26px;
    }

    @media(max-width:768px){
        width: 100%;
        margin-bottom: 15px;

        span{
            font-size: 19px;
        }
    }
`
const TitleQtd = styled.div`
    display: flex;
    width: 30%;
    height: 50px;
    align-items: center;
    padding: 12px;

    border-radius: 12px;
        span{
            margin-left: 6px;
            text-transform: uppercase;
            font-size: 16px;
        }
    
    @media(max-width:768px){
        width: 60%;
        margin-bottom: 15px;
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const BackColorName = {
        color: props.colorName || "#000",
        background: props.bgName || '#ccc'
    }
    const BackColorQtd = {
        color: props.colorQtd || "#000",
        background: props.bgQtd || '#ccc'
    }
    return(
        <TitleCurso>
            <TitleName style={BackColorName}>
                <i className={`fa fa-${props.lenght} fa-${props.icon}`}></i>
                <span>{props.title}</span>
            </TitleName>
            <TitleQtd style={BackColorQtd}>
                <span>10</span>{/* Criar sistema dinamico. (count) */}
                <span>Cursos(s)</span>
            </TitleQtd>
        </TitleCurso>
    )
}