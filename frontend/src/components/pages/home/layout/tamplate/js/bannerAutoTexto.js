
//  export function autoText() {
//     let elInput = <input type="text" readOnly/>
//     let value = ''
//     let words = ['Aldomar', 'Assolin', 'da', 'Silva']
//     let indexWords = 0
//     let indexChar = 0

//     setInterval(() => {
//         if(indexChar < words[indexWords].length){
//             indexChar++
//             value = words[indexWords].substr(0, indexChar)
            
//         }else if (indexWords < words.length - 1){
//             indexWords++
//             indexChar = 0
//         }else{
//             indexWords = 0
//             indexChar = 0
//         }
//         return elInput

//     }, 2000)
// }