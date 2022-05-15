import React, {useState} from 'react';
import {Container} from "./style";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase-config'

function FieldsLogin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
        <div>
            <label>Email:</label>
            <input id="email" name="email" type="text" placeholder="example@gmail.com" onChange={(event) => {
                    setLoginEmail(event.target.value);
                    }}/>
            <label>Senha:</label>
            <input id="password" name="password" type="text" placeholder="123456" onChange={(event) => {
                    setLoginPassword(event.target.value);
                    }}/>
            <button 
            onClick={login}
                // {() => {
                // navigate("/profile");
                // {login}
                // }}
            >
            Login
            </button>
            <div>
              <button 
              onClick={() => {
                  navigate("/register");
                  }}
              >
              Registrar
              </button>
            </div>
        </div>
    </Container>
  )
}

export default FieldsLogin