import React from "react";
import styled from "styled-components"

import { Container } from "../../../../../styles"
import CardDepoimento from "../../../../assistants/CardDepoimento";

const Depoimentos = styled.div`
width: 100%;
    display: flex;
    padding: 30px 0;

    font: lato;
    background: #a996c7;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Depoimentos>
            <Container>
                <CardDepoimento
                    name="Lucas Santana"
                >
                    “Surpreendentemente estimulante, profundo e completo. Um dos melhores cursos que já fiz online!
                    Qualidade impressionante, tanto na didática como a qualidade dos vídeos.”
                </CardDepoimento>
                <CardDepoimento
                    name="Rodrigo Yurei - Agência Spark"
                >
                    “Foi a melhor forma de estudo que encontrei, simples de alta qualidade, com cursos objetivos, 
                    tem ajudado muito minha carreira. Os cursos são simples e não simplórios.”
                </CardDepoimento>
                <CardDepoimento
                    name="Fábio Freitas Fábio FreitasFábio Freitas"
                >
                    “Um profissional ímpar, com uma visibilidade incrível de linguagens e uma sensibilidade 
                    importante aos detalhes de usabilidade,profissional ímpar, com uma visibilidade incrível de linguagens e uma sensibilidade 
                    importante aos detalhes de usabilidade, interface e experiência do usuário. Um excelente parceiro.”
                </CardDepoimento>
            </Container>
        </Depoimentos>
    )
}