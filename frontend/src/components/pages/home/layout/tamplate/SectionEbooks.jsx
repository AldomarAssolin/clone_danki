import React from "react";

import CardCursos from "../../../../assistants/CardCursos";
import Ebook from "../../../../../assets/images/ebooks.jpg"
import { Container } from "../../../../../styles";
import styled from "styled-components";

const DivEbook = styled.div`
    padding: 60px 0;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <DivEbook>
            <Container>
                <CardCursos
                    src={Ebook}
                    title="Ebook Viver de Negócio Online"
                    strong=" (GRÁTIS)"
                    textLink="conheça o produto"
                >
                    O E-book perfeito para quem deseja começar um negócio 100% 
                    online altamente lucrativo e automatizado.
                </CardCursos>
                <CardCursos
                    src={Ebook}
                    title="Ebook Viver de Negócio Online"
                    strong=" (GRÁTIS)"
                    textLink="conheça o produto"
                >
                    O E-book perfeito para quem deseja começar um negócio 100% 
                    online altamente lucrativo e automatizado.
                </CardCursos>
            </Container>
        </DivEbook>
    )
}