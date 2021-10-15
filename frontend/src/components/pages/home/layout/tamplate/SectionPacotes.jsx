import React from "react";

import CardCursos from "../../../../assistants/CardCursos";
import ComboMaster from "../../../../../assets/images/comboMaster.jpg"
import { Container } from "../../../../../styles";
import styled from "styled-components";

const DivPac = styled.div`
    padding: 60px 0;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <DivPac>
            <Container>
                <CardCursos
                    src={ComboMaster}
                    title="Combo Master"
                    textLink="conheça o pacote"
                >
                    O combo 'supremo' da Danki Code! Com nossos melhores treinamentos e pacotes 
                    por uma condição exclusiva.
                </CardCursos>
                <CardCursos
                    src={ComboMaster}
                    title="Combo Master"
                    textLink="conheça o pacote"
                >
                    O combo 'supremo' da Danki Code! Com nossos melhores treinamentos e pacotes 
                    por uma condição exclusiva.
                </CardCursos>
            </Container>
        </DivPac>
    )
}