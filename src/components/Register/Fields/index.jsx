import React, {useState} from "react";
import {Container} from "./style";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase-config'

export default function Fields(){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth, 
            registerEmail, 
            registerPassword
        );
        console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    const initialState = {
        type: '',
        name: '',
        lastname: '',
        email: '',
        password: '',
    }

    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = (event) =>{
        //props.addPlanet(fields)
        event.preventDefault()
        setFields(initialState)
    }

    return(
        <Container>
            <div className="form">
            <h2>Cadastro</h2>
                {/* <label>Eu sou um</label>
                <label>Aluno</label>
                <input type="radio" id="aluno" name="aluno" value={fields.type} onChange={handleFieldsChange}></input>
                <label>Professor</label>
                <input type="radio" id="professor" name="professor" value={fields.type}></input> */}
                <input placeholder="Nome" id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}></input>
                <input placeholder="Sobrenome" id="lastname" name="lastname" type="text" value={fields.lastname} onChange={handleFieldsChange}></input>
                <input placeholder="Email" id="email" name="email" type="text" /*value={fields.email}*/ 
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                    }}
                    >
                </input>
                <input placeholder="Senha" id="password" name="password" type="text" /*value={fields.password}*/ 
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                    }}>
                </input>
                <input placeholder="Confirmar senha" type="text"></input>
            <button onClick={register}>Criar usuário</button>
            </div>
        </Container>
    )
}