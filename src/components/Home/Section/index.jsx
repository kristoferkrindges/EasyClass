import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Container, ListCards} from "./styles";
import Cards from "../../Shared/Cards"
import logo from "../../../imagens/logo.jpeg"
import api from "../../../services/api"

export default function Section(){
    const [teachers, setTeachers] = useState([])
    useEffect(()=> getTeachers(), [])

     
  let navigate = useNavigate(); 

  const routeChange = (id) =>{ 
      console.log(id);
    let path = `/request?teacherId=${id}`; 
    navigate(path);
  }

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
        console.log("get teachers by subject" + id);
        api.get("/teacher?subject=" + id).then(({data})=>{
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
                <option value="English">Inglês</option>
                <option value="History">Historia</option>
                <option value="Guitar">Guitarra</option>
                <option value="Music">Música</option>
                <option value="Biology">Biologia</option>
                <option value="Programming">Programação</option>
            </select>
            </div>
            <ListCards>
                {
                    teachers.map((value, key) =>
                    <Cards
                    img={logo}
                    star={"xxxxx"}
                    name={value.firstName}
                    lastName={value.lastName}
                    disciplina={"Inglês"}
                    preco={"R$65 Hr/Aula"}
                    id={value.teacherId}
                    onClick={routeChange}
                    key={key}   
                />)
                }
            </ListCards>
            <p>Encontre os melhores profissionais do mercado!</p>
        </Container>
    )
}