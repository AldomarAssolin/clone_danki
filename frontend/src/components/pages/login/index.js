import React, {useState} from 'react';
import {Container, Input, Button, Title} from '../../../styles'
import firebase from '../../../data/Firebase'
import { getAuth } from "firebase/auth"


export default function Login() {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const auth = getAuth();
  const login = () => {
    firebase.auth().signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
		})
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });
  }
  
  const cadastro = () => {
    firebase.auth().createUserWithEmailAndPassword(auth, email, pass).then(user => {
      console.log(user)
    })
  }


  return (
   <Container> 
     <div>
       <Title>Seja bem vindo, faça login para continuar </Title>
        <Input type="email" placeholder="Informe seu email"
        value={email} onChange={e=> setEmail(e.target.value)}
        />
        <Input type="password" placeholder="Informe sua senha"
        value={pass} onChange={e=> setPass(e.target.value)}
        />
        <Button onClick={login}> Entrar com e-mail agora </Button>
        <Button primary onClick={cadastro}> Cadastre com e-mail agora </Button>
     </div>
   </Container>   
  );
}