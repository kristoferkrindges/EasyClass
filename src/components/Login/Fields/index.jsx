import React, {useState} from 'react';
import {Container} from "./style";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase-config'
import Fields from '../../Register/Fields'

function FieldsLogin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
          auth, 
          loginEmail, 
          loginPassword
      );
      console.log(user)
      } catch (error) {
          console.log(error.message);
      }
  };

  let navigate = useNavigate();

  return (
    <Container>
        <div className="form">
            <h2>Login</h2>
            <input id="email" name="email" type="text" placeholder="Email" onChange={(event) => {
                    setLoginEmail(event.target.value);
                    }}/>
            <input id="password" name="password" type="text" placeholder="Senha" onChange={(event) => {
                    setLoginPassword(event.target.value);
                    }}/>
            <button 
            onClick={login
              // , () => {
              // navigate("/profile");
              // }
            }
            >
            Entrar
            </button>
            <h3>Novo usuário?</h3>
              <p
              onClick={() => {
                  navigate("/register");
                  }}
              >
              Clique aqui
              </p>
        </div>
    </Container>
  )
}

export default FieldsLogin