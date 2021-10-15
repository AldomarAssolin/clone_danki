import React from "react";
import styled from "styled-components";

import img from "../../../assets/images/danki_logo.png";
import googleplayicon from "../../../assets/images/googleplayicon.png";
import appstoreicon from "../../../assets/images/appstoreicon.png";
import NavItem from "../../assistants/NavItem";

const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Lato', sans-serif;
    font-weight: bold;

    background: #53307D;
    /* background: #5E3EA1; */
    p{
        margin-bottom: 8px;
    }
`

const Top = styled.div`
    display: flex;
    padding: 70px 0;

    color: #fff;
    background: #5E3EA1;

    h2{
        margin-bottom: 10px;
        text-align: center;
    }

    .left{
        display: flex;
        flex-direction: column;
        flex: 5;
        padding: 0 5%;
        text-align: left;
        p{
            margin-bottom: 20px;
            font-weight: 300;
        }

        .redes{
            display: flex;
            align-items: stretch;
            padding: 10px 0;

            a{
                color: #fff;
                margin: 20px;
                font-size: 20px;
                i{
                    font-size: 20px;
                }
            }
        }

        .apps{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 0;

            a{
                margin-right: 10px;
                color: #fff;
                img{
                    width: 100%;
                    max-width: 150px;
                    height: 45px;
                }
            }
        }
    }

    .right{
        display: flex;
        flex-direction: column;
        flex: 5;
        align-items: center;
        p{
            font-weight: 300;
        }
    }

    @media(max-width:1000px){
        flex-direction: column;
    }
`

const Bottom = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Footer>
                <Top>
                    <div className="left">
                        <h2>Sobre a Danki Code</h2>
                        <p>
                            A Danki Code é uma empresa de desenvolvimento web e também atua na área de cursos online
                            voltados também ao assunto. Sediada em Florianópolis, desenvolve soluções inovadoras para
                            empresas e também forma profissionais capacitados e completos para a área de TI.
                        </p>
                        <p>Plataforma Desenvolvida com <i className="fa fa-heart"></i> por Danki Code.</p>
                        <p>É proibida a reprodução ou distribuição do conteúdo publicado aqui.</p>
                        <div className="redes">
                            <a href='https://www.instagram.com/dankicodeoficial/'>
                                <i className="fa fa-instagram" />
                            </a>
                            <a href='https://www.youtube.com/dankicode'>
                                <i className="fa fa-youtube" />
                            </a>
                            <a href='https://www.facebook.com/dankicode'>
                                <i className="fa fa-facebook" />
                            </a>
                            <a href='https://www.linkedin.com/in/danki-code-oficial-1698b1209/'>
                                <i className="fa fa-linkedin" />
                            </a>    
                        </div>
                        <div className="apps">
                            <a href="https://play.google.com/store/apps/details?id=com.app.dankicode.com">
                                <img src={googleplayicon} alt="logomarca" width="100px"/>
                            </a>
                            <a href="https://apps.apple.com/br/app/danki-code-cursos-online/id1522964106">
                                <img src={appstoreicon} alt="logomarca" width="100px"/>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Atendimento ao cliente</h2>
                        <p><i class="fa fa-envelope"></i> <strong>E-mail: </strong>atendimento@dankicode.com</p>
                        <p><i class="fa fa-phone"></i> <strong>Telefone/WhatsApp:</strong> (48) 99684-4281</p>
                        <p><i class="fa fa-concierge"></i> De segunda a domingo</p>
                    </div>
                </Top>
                <Bottom>
                    <NavItem href="/">
                        <img src={img} alt="logomarca" width="100px"/>
                    </NavItem>
                </Bottom>
        </Footer>
    )
}