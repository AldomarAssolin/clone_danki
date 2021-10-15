/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { Container } from "../../../../../styles"
import styled from "styled-components";
import bgImg from "../../../../../assets/images/background.png"
import mockupImg from "../../../../../assets/images/mockup.png"
import appstore from "../../../../../assets/images/appstore.png"
import googleplay from "../../../../../assets/images/googleplay.png"

const AppDescription = styled.div`
    display: flex;
    padding: 50px 0;

    background-size: contain;

    .img{
        img{
            width: 100%;
            height: 100%;
        }
        @media(max-width:768px){
            width: 50%;
            margin-top: 30px;
        }
    }

    .right{
        width: 50%;
        padding: 5%;
        font: 19px lato;
        color: #5E3EA1;

        @media(max-width:768px){
            width: 100%;
            margin-top: 30px;
        }
        h2, p{
            text-align: center;
        }
        p{
            margin: 10px;
        }
        a{
            margin-right: 12px;
        }
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <AppDescription style={{ backgroundImage: `url(${bgImg})` }}>
            <Container>
                <div className="img"><img src={mockupImg} alt="mockup" /></div>
                <div className="right">
                    <h2>Conte com um aplicativo completo e aprenda de qualquer lugar a qualquer momento</h2>
                    <p>
                        Aprenda no transporte, na academia e onde mais você quiser. Conte ainda com nosso suporte
                        exclusivo direto pelo app e interaja com a comunidade Danki Code.
                    </p>
                    <div className="Apps">
                        <a href="https://play.google.com/store/apps/details?id=com.app.dankicode.com" >
                            <img src={appstore} alt="mockup" />
                        </a>
                        <a href="https://apps.apple.com/br/app/danki-code-cursos-online/id1522964106">
                            <img src={googleplay} alt="mockup" />
                        </a>
                    </div>
                </div>
            </Container>
        </AppDescription>
    )
}

// 