import React, {useState} from 'react';
import FieldsLogin from '../Fields';
import {Container} from "./style";
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import Fields from '../../Register/Fields';

function FormLogin() {

  const logout = async () => {

    await signOut(auth)
  };

  return (
    <Container>
        <form>
          <FieldsLogin></FieldsLogin>
          <h3>Usuário logado:</h3>
          {FieldsLogin.user?.email}
          <button onClick={logout}>Sair</button>
        </form>
    </Container>
  )
}

export default FormLogin