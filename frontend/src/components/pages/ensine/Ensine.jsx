import React, {Component} from "react";

//import {autoText} from '../home/layout/tamplate/js/bannerAutoTexto'

class Ensine extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: true
        }
        this.autoText = this.autoText.bind(this)
    }

    autoText(result){
        //const elInput = <input type="text" value={this.props.value} />
        const words = ['Aldomar', 'Assolin']
        let indexWords = 0
        let indexChar = 0
        let value
            setInterval(() => {
                if(indexChar < words[indexWords].length){
                    indexChar++
                    value = 'value'
                    value = words[indexWords].substr(0, indexChar);
                    //elInput.setInputValues(value, result)
                    //elInput.textContent = result
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
            <form>
               {this.autoText()}
            </form>
        )
    }
}

export default Ensine
