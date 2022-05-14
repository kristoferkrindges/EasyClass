import React from "react";
import {Container} from "./style";

export default function Fields(){
    return(
        <Container>
            <div>
                <label>Eu sou um</label>
                <label>Aluno</label>
                <input type="radio" id="aluno" name="" value="aluno"></input>
                <label>Professor</label>
                <input type="radio" id="professor" name="" value="professor"></input>
            </div>
            <div>
                <label>Nome:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Sobrenome:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Senha:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Confirmar senha:</label>
                <input type="text"></input>
            </div>
        </Container>
    )
}