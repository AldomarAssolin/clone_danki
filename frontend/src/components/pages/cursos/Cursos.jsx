import React from "react";
import { Container } from "../../../styles";
import SectionTitle from "../../assistants/SectionTitle";
import SectionCursos from "../home/layout/tamplate/SectionCursos";
import SectionEbooks from "../home/layout/tamplate/SectionEbooks";
import SectionPacotes from "../home/layout/tamplate/SectionPacotes";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <React.Fragment>
            <Container>
                <SectionCursos/> 
            </Container>

            <SectionTitle
                title="Pacotes prontos para você!"
                context="Leve vários cursos por um valor para lá de especial ;)"
            />
            <SectionPacotes/>
            <SectionTitle
                title="Ebook, Materiais e mais..."
                context="Aproveite também nosso conteúdo grátis :)"
            />
            <SectionEbooks/>
        </React.Fragment>
    )
}