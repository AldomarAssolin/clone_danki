import React from "react";
import styled from "styled-components"

const Card = styled.div`
    width: 20%;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;

    @media(max-width:900px){
        width: 45%;
        height: 320px;
    }
    @media(max-width:590px){
        width: 90%;
        
        margin: auto;
    }

    .text{
        height: 50px;
        p{
            color: #5e3ea1;
            font-family: lato;
            font-size: 23px;
            font-weight: 300;
            margin-top: 20px;
            padding: 15px 0;
            text-align: center;
        }
    }
    

    .imgContainer{
        padding: 40px 40px;
        border-radius: 50%;
        background: #DCD4E5;
        img{
            width: 64px;
            height: 64px;
        }}

`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Card>
            <div class="imgContainer"><img src={props.src} alt={props.alt}/></div>
            <div class="text">
                <p>{props.title}</p>
            </div>
        </Card>
    )
}