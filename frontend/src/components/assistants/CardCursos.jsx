import React from "react";
import styled from "styled-components";

import star from '../../assets/images/star.png'
import NavItem from '../assistants/NavItem'

const CardCurso = styled.div`
    width: 100%;
    max-width: 300px;
    height: 500px;

    border: 1px solid #ccc;

    margin: 30px 10px;

    .image{
        width: 100%;
        height: 160px;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .title{
        font: 23px lato;
        text-align: center;
        padding: 10px;
    }

    .description{
        height: 220px;
        padding: 10px 12px;
        font: 17px lato;

        background: #eee;

        overflow: scroll;
            ::-webkit-scrollbar{
                width: 4px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1;
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
        padding: 5px 10px;
    }

    .link{
        height: 40px;
        background: #4c3282;
        display: flex;
        align-items: center;
        justify-content: center;
        
        a{
            text-decoration: none;
            text-transform: uppercase;
        }
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <CardCurso>
            <div className="image">
                <NavItem><img src={props.src} alt={props.alt} /></NavItem>
            </div>
            <div className="title">
                <p>{props.title}<b>{props.strong}</b></p>
            </div>
            <div className="description">
                <p>{props.children}</p>
            </div>
            <div className="star">
                <img src={star} alt="star" ></img>
                <img src={star} alt="star" ></img>
                <img src={star} alt="star" ></img>
                <img src={star} alt="star" ></img>
                <img src={star} alt="star" ></img>
            </div>
            <div className="link">
                <NavItem bg="#4c3282">{props.textLink}</NavItem>
            </div>
        </CardCurso>
    )
}