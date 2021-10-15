import React from "react";
import { Component } from "react";
import styled from "styled-components";

import NavItem from '../../../../assistants/NavItem'
import image from '../../../../../assets/images/banner-home.png'

const BannerContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 110px 3%;
    text-align: center;

    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    object-fit: fill;

    h2{
        font-size: 23px;
        font-weight: 400;
        margin: 30px 0;
        color: #fff;
    }
    input[type=text]{
        font-size: 110px;
        width: 80%;
        font-family: lato;
        text-align: center;
        background: 0 0;
        border: 0;
        outline: none;
    }
`

const Mat = styled.div`
    a.btn-mat{
        color: #e7426b;
        padding: 10px 30px;
        margin-bottom: 30px;
        letter-spacing: -.3px;
        text-decoration: none;

        font-size: 11px;
        font-weight: 700;
        border-radius: 30px;
    }
 `



// eslint-disable-next-line import/no-anonymous-default-export
class Banner extends Component {

    

    render() {

        return (
            <BannerContainer style={{ backgroundImage: `url(${image})` }} >
                <h2>Aprenda Sobre</h2>
                <input id="auto-texto" type="text" name="auto-text" value readOnly/>
                <h2>Em Cursos Completos</h2>
                <Mat>
                    <NavItem
                        classes="btn-mat"
                        color="#e7426b"
                        border="1px solid #e7426b"
                        href="/Matricula">
                        MATRICULE-SE GRÁTIS
                    </NavItem>
                </Mat>
            </BannerContainer>
        )
    }
}

export default Banner


        // const Run = () => {
        //     let words = ['Web', 'Games', 'Marketing']
        //     let indexWord = 0
        //     let indexChar = 0
        //     //var interval
        //     let elInput = document.getElementById("auto-texto")

        //     elInput.focus()
        //     document.getElementsByClassName(window).scrollTop(0)

        //         setInterval(function () {
        //             if (indexChar < words[indexWord].length) {
        //                 indexChar++
        //                 elInput.val(words[indexWord].substr(0, indexChar))
        //             } else if (indexWord < words.length - 1) {
        //                 indexWord++
        //                 indexChar = 0
        //             } else {
        //                 indexWord = 0
        //                 indexChar = 0
        //             }
        //         }, 200)
        // }
        // Run()
        // console.log(this.Run)