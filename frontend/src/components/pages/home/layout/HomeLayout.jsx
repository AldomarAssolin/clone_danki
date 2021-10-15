import React from "react";

import SectionTitle from "../../../assistants/SectionTitle";
import SectionBanner from './tamplate/SectionBanner'
import SectionServices from "./tamplate/SectionServices";
import SectionCursos from "./tamplate/SectionCursos";
import SectionPacotes from "./tamplate/SectionPacotes"
import SectionEbooks from "./tamplate/SectionEbooks";
import SectionDepoimentos from "./tamplate/SectionDepoimentos";
import SectionApp from "./tamplate/SectionApp";
import SectionFormVip from "./tamplate/SectionFormVip";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <React.Fragment>
            <SectionBanner/>
            <SectionServices/>
            <SectionTitle
                title="Os melhores cursos para você"
                context="Torne-se um desenvolvedor completo e aprenda com quem está no mercado"
            />
            <SectionCursos/>
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
            <SectionApp/>
            <SectionFormVip/>
            <SectionDepoimentos/>
        </React.Fragment>
    )
}