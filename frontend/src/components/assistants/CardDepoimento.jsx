import React from "react";
import styled from "styled-components";

import star from "../../assets/images/star.png"

const CardDep = styled.div`
    width: 250px;
    height: 220px;
    padding: 15px;
    margin: 30px;
    font: 14px lato;

    border-radius: 12px;
    background: #fff;

    .dep{
        height: 120px;  
        display: flex;
        flex-direction: column;

        overflow: scroll;
            ::-webkit-scrollbar{
                width: 4px;
            }
            ::-webkit-scrollbar-track {
                background: #fff;
            }
            ::-webkit-scrollbar-thumb {
                background: #5E3EA1; 
                border-radius: 5px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #5ED4E5; 
                border-radius: 5px;
            }
    }
    
    .star{
        padding: 5px 5px;
        img{
            margin-right: 8px;
        }
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <CardDep>
            <div className="dep"><p>{props.children}</p></div>
            <div className="star">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
            <div><p><b>{props.name}</b></p></div>
        </CardDep>
    )
}