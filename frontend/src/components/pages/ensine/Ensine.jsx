import React, {Component} from "react";

//import {autoText} from '../home/layout/tamplate/js/bannerAutoTexto'

class Ensine extends Component{

    constructor(props){
        super(props)
        this.state = {autoText: true}
    }

    autoText(){
        const words = ['Aldomar', 'Assolin']
        let indexWords = 0
        let indexChar = 0
        let value
        setInterval(() => {
            if(indexChar < words[indexWords].length){
                indexChar++
                value = 'defaultValue'
                value = words[indexWords].substr(0, indexChar);
            }else if (indexWords < words.length - 1){
                indexWords++
                indexChar = 0
            }else{
                indexWords = 0
                indexChar = 0
            }
            return value
        }, 2000)
    }
    

    render() {
        return (
            <div>
                <input type='text' defaultValue={(e) => {console.log(this.autoText())}}/>
            </div>
        )
    }
}

export default Ensine
