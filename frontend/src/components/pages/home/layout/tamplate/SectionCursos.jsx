import React from "react";
import styled from "styled-components";

import { Container } from "../../../../../styles"
import CursosWeb from "./cursos/CursosWeb";
import CursosGame from "./cursos/CursosGame";
import CursosMarketing from "./cursos/CursosMarketing";
import CursosDevPessoal from "./cursos/CursosDevPessoal";


const Cursos = styled.div`
    padding: 50px 2%;
`


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Cursos>
            <Container>
                <CursosWeb/>
                <CursosGame/>
                <CursosMarketing/>
                <CursosDevPessoal/>
            </Container>
        </Cursos>
    )
}