import React from "react";
import Card from "../../../../assistants/CardSv";

import iconUser from "../../../../../assets/images/icon_user.png"
import iconFolder from "../../../../../assets/images/icon_folder.png"
import iconDolar from "../../../../../assets/images/icon_dolar.png"
import iconMedia from "../../../../../assets/images/icon_media.png"
import iconCertified from "../../../../../assets/images/icon_certified.png"
import iconCheck from "../../../../../assets/images/icon_check.png"
import iconSupport from "../../../../../assets/images/icon_support.png"
import iconVideo from "../../../../../assets/images/video_icon.png"
import { Center, Container } from "../../../../../styles";
import styled from "styled-components";
//import styled from "styled-components";

const Services = styled.div`
    width: 100%;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Services>
            <Center>
                <Container>
                    <Card src={iconUser} title="Aprenda com quem está no mercado" />
                    <Card src={iconFolder} title="Aulas objetivas e detalhadas" />
                    <Card src={iconDolar} title="Preço Acessível, com cursos completos" />
                    <Card src={iconMedia} title="Assista em qualquer dispositivo" />
                    <Card src={iconCertified} title="Certificado Profissional" />
                    <Card src={iconCheck} title="Acesso Vitalício" />
                    <Card src={iconSupport} title="Suporte 1 a 1" />
                    <Card src={iconVideo} title="EAD Exclusiva" />
                </Container>
            </Center>
        </Services>
    )
}