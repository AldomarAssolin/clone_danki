import React from "react";

import TitleCursos from "../../../../../assistants/TitleCursos";
import CardCursos from "../../../../../assistants/CardCursos";
import AutoDidata from "../../../../../../assets/images/autodidata.jpg"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <React.Fragment>
            <TitleCursos
                icon="superpowers"
                lenght="2x"
                title="Desenvolvimento Pessoal"
                colorName="#039d09"
                bgName="#ddecdd"
                colorQtd="#1f1f1f"
            />
            <CardCursos
                src={AutoDidata}
                title="Curso Programador Autodidata"
                textLink="conheça o curso"
            >
                Seja Um Programador Autodidata, Aprenda a Aprender do Jeito Certo e Nunca Mais 
                Fique 'Estagnado' Com Seu Aprendizado! Neste Curso você irá aprender como ser um programador 
                autodidata com técnicas utilizadas por grandes programadores e aprender qualquer linguagem de 
                programação em tempo recorde.
            </CardCursos>
            <CardCursos
                src={AutoDidata}
                title="Curso Programador Autodidata"
                textLink="conheça o curso"
            >
                Seja Um Programador Autodidata, Aprenda a Aprender do Jeito Certo e Nunca Mais 
                Fique 'Estagnado' Com Seu Aprendizado! Neste Curso você irá aprender como ser um programador 
                autodidata com técnicas utilizadas por grandes programadores e aprender qualquer linguagem de 
                programação em tempo recorde.
            </CardCursos>
            <CardCursos
                src={AutoDidata}
                title="Curso Programador Autodidata"
                textLink="conheça o curso"
            >
                Seja Um Programador Autodidata, Aprenda a Aprender do Jeito Certo e Nunca Mais 
                Fique 'Estagnado' Com Seu Aprendizado! Neste Curso você irá aprender como ser um programador 
                autodidata com técnicas utilizadas por grandes programadores e aprender qualquer linguagem de 
                programação em tempo recorde.
            </CardCursos>
        </React.Fragment>
    )
}