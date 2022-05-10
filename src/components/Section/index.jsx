import React, { useState, useEffect } from "react";
import {Container, ListCards} from "./styles";
import Cards from "../Cards"
import logo from "../../imagens/logo.jpeg"

import api from "../../services/api"

export default function Section(){
    const [teachers, setTeachers] = useState([])
    useEffect(()=> getTeachers(), [])

    const getTeachers = () => {
        console.log("get teachers")
        api.get("/teacher").then(({data})=>{
            setTeachers(data)
            console.log(data)
        }).catch((error) => {
            console.error('error',error);
          });
      };

      const getTeachersSubjectId = (id) => {
        console.log("get teachers by subjectId" + id);
        api.get("/teacher?subjectId=" + id).then(({data})=>{
            setTeachers(data)
            console.log(data)
        }).catch((error) => {
            console.error('error',error);
          });
      };
    return(
        <Container>
            <div className="seletor">
                <h3>O QUE VOCÊ PROCURA?</h3>
                <select 
                onChange={e => getTeachersSubjectId(e.target.value)}
                
                className="selt">
                <option value="1">Inglês</option>
                <option value="2">Historia</option>
                <option value="3">Música</option>
                <option value="4">Biologia</option>
            </select>
            </div>
            <ListCards>
                {
                    teachers.map((value, key) =>
                    <Cards
                    img={logo}
                    estrela={"xxxxx"}
                    name={value.firstName}
                    lastName={value.lastName}
                    disciplina={"Inglês"}
                    preco={"R$65 Hr/Aula"}
                    id={value.teacherId}   
                />)
                }
            </ListCards>
            <p>Maiores buscas com os Melhores Profissionais</p>
        </Container>
    )
}