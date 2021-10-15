import React from "react";
import { Switch, Route, Redirect } from 'react-router'
import styled from "styled-components";

import Home from "../../pages/home/Home"
import Cursos from "../../pages/cursos/Cursos"
import Certificados from "../../pages/certificados/Certificados"
import Forum from "../../pages/forum/Forum";
import Ensine from "../../pages/ensine/Ensine";
import Login from "../../pages/login";
import Matricula from "../../pages/matricula/Matricula";


//import { Center } from "../../../styles";

const Main = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Main id = "page-wrap">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cursos' component={Cursos} />
                <Route path='/certificados' component={Certificados} />
                <Route path='/forum' component={Forum} />
                <Route path='/ensine' component={Ensine} />
                <Route path='/login' component={Login} />
                <Route path='/matricula' component={Matricula} />
                <Redirect from='*' to='/' />
            </Switch>
        </Main>
    )
}