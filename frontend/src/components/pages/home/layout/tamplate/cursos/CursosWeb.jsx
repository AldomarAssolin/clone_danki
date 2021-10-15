import React from "react";

import CardCursos from "../../../../../assistants/CardCursos";
import TitleCursos from "../../../../../assistants/TitleCursos"
import ImgFrontend from "../../../../../../assets/images/frontend.png"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <React.Fragment>
            <TitleCursos
                    icon="desktop"
                    lenght="2x"
                    title="Web e Mobile"
                    bgName="#d0c4e8"
                    colorName="#4c3282"
                    colorQtd="#1f1f1f"
                />
                <CardCursos
                    src={ImgFrontend}
                    title="Curso Webmaster Front-End "
                    strong="Completo"
                    textLink="conheça o curso"
                >
                    Aprenda e domine absolutamente tudo sobre front-end e web design em apenas um curso!
                    Tudo que você precisa para se tornar um(a) Desenvolvedor(a) Front-End. São mais de 600 aulas,
                    35 projetos práticos e 300 exercícios.
                </CardCursos>
                <CardCursos
                    src={ImgFrontend}
                    title="Curso Webmaster Front-End "
                    strong="Completo"
                    textLink="conheça o curso"
                >
                    Aprenda e domine absolutamente tudo sobre front-end e web design em apenas um curso!
                    Tudo que você precisa para se tornar um(a) Desenvolvedor(a) Front-End. São mais de 600 aulas,
                    35 projetos práticos e 300 exercícios.
                </CardCursos>
                <CardCursos
                    src={ImgFrontend}
                    title="Curso Webmaster Front-End "
                    strong="Completo"
                    textLink="conheça o curso"
                >
                    Aprenda e domine absolutamente tudo sobre front-end e web design em apenas um curso!
                    Tudo que você precisa para se tornar um(a) Desenvolvedor(a) Front-End. São mais de 600 aulas,
                    35 projetos práticos e 300 exercícios.
                </CardCursos>
                <CardCursos
                    src={ImgFrontend}
                    title="Curso Webmaster Front-End "
                    strong="Completo"
                    textLink="conheça o curso"
                >
                    Aprenda e domine absolutamente tudo sobre front-end e web design em apenas um curso!
                    Tudo que você precisa para se tornar um(a) Desenvolvedor(a) Front-End. São mais de 600 aulas,
                    35 projetos práticos e 300 exercícios.
                </CardCursos>
                <CardCursos
                    src={ImgFrontend}
                    title="Curso Webmaster Front-End "
                    strong="Completo"
                    textLink="conheça o curso"
                >
                    Aprenda e domine absolutamente tudo sobre front-end e web design em apenas um curso!
                    Tudo que você precisa para se tornar um(a) Desenvolvedor(a) Front-End. São mais de 600 aulas,
                    35 projetos práticos e 300 exercícios.
                </CardCursos>
        </React.Fragment>
    )
}