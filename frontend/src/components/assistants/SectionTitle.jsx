import React from "react";
import styled from 'styled-components'

const DivTitle = styled.div`
    padding: 30px 0;
    text-align: center;
    color: #fff;
    font-family: lato;

    h1{
        margin-bottom: 23px;
        font-size: 26px;
    }
    p{
        font-weight: 300;
        font-size: 23px;
    }
`


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const CardStyles = {
        background: props.background || '#4C3282'
    }
    return(
        <DivTitle style={CardStyles}>
            <h1>{props.title}</h1>
            <p>{props.context}</p>
        </DivTitle>
    )
}