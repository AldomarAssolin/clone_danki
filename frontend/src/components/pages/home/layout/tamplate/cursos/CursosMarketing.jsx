import React from "react";


import CardCursos from "../../../../../assistants/CardCursos";
import TitleCursos from "../../../../../assistants/TitleCursos";
import YouTubeMarket from "../../../../../../assets/images/youTubeMarkt.png"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <React.Fragment>
            <TitleCursos
                icon="lightbulb-o"
                lenght="2x"
                title="Empreendedorismo e Marketing"
                colorName="#ff1e10"
                bgName="#fdd7da"
                colorQtd="#1f1f1f"
            />
            <CardCursos
                src={YouTubeMarket}
                title="Viver de Youtube"
                textLink="conheça o curso"
            >
                O maior treinamento para quem quer Viver de Youtube!
                Neste curso incrível você vai aprender como criar seu canal, ganhar inscritos, gerar 
                receita e muito mais. Você vai aprender tudo isso com o especialista Peter Jordan. 
                Dono do canal Ei Nerd (9 milhões de inscritos) e diversos outros canais de sucesso.
            </CardCursos>
            <CardCursos
                src={YouTubeMarket}
                title="Viver de Youtube"
                textLink="conheça o curso"
            >
                O maior treinamento para quem quer Viver de Youtube!
                Neste curso incrível você vai aprender como criar seu canal, ganhar inscritos, gerar 
                receita e muito mais. Você vai aprender tudo isso com o especialista Peter Jordan. 
                Dono do canal Ei Nerd (9 milhões de inscritos) e diversos outros canais de sucesso.
            </CardCursos>
            <CardCursos
                src={YouTubeMarket}
                title="Viver de Youtube"
                textLink="conheça o curso"
            >
                O maior treinamento para quem quer Viver de Youtube!
                Neste curso incrível você vai aprender como criar seu canal, ganhar inscritos, gerar 
                receita e muito mais. Você vai aprender tudo isso com o especialista Peter Jordan. 
                Dono do canal Ei Nerd (9 milhões de inscritos) e diversos outros canais de sucesso.
            </CardCursos>
            <CardCursos
                src={YouTubeMarket}
                title="Viver de Youtube"
                textLink="conheça o curso"
            >
                O maior treinamento para quem quer Viver de Youtube!
                Neste curso incrível você vai aprender como criar seu canal, ganhar inscritos, gerar 
                receita e muito mais. Você vai aprender tudo isso com o especialista Peter Jordan. 
                Dono do canal Ei Nerd (9 milhões de inscritos) e diversos outros canais de sucesso.
            </CardCursos>
        </React.Fragment>
    )
}