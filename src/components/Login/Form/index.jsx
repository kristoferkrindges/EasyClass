import React, {useState} from 'react';
import FieldsLogin from '../Fields';
import {Container} from "./style";
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase-config';

function FormLogin() {
  const logout = async () => {

    await signOut(auth)
  };

  const [user] = useState({});

  return (
    <Container>
        <h2>Faça login</h2>
        <form>
          <FieldsLogin></FieldsLogin>
          <h3 >Usuário logado:</h3>
          {user?.email}
          <button onClick={logout}>Sair</button>
        </form>
    </Container>
  )
}

export default FormLogin