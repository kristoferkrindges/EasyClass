import React, { useState, useEffect } from "react";
import {Container, ListCards} from "./styles";
import Cards from "../Cards"
import logo from "../../imagens/logo.jpeg"

import api from "../../services/api"

export default function Section(){
    const [teachers, setTeachers] = useState([])
    useEffect(()=> {
        api.get("/teacher").then(({data})=>{
            setTeachers(data)
            console.log(data)
        }).catch((error) => {
            console.error('error',error);
          })
    }, [])
    return(
        <Container>
            <div className="seletor">
                <h3>O QUE VOCÊ PROCURA?</h3>
                <select className="selt">
                    <option value="History">História</option>
                    <option value="Biology">Biologia</option>
                    <option value="Guitar">Guitarra</option>
                    <option value="Programming">Programação</option>
                </select>
            </div>
            <ListCards>
                {teachers?.map((teacher)=>(
                    <Cards
                        key={teacher.teacherId}
                        img={logo}
                        stars={teacher.rating}
                        name={teacher.firstName}
                        lastName={teacher.lastName}
                        subject={"Inglês"}
                        price={"R$65 Hr/Aula"}
                        id={teacher.teacherId} 
                />
                ))}
            </ListCards>
            <p>Maiores buscas com os Melhores Profissionais</p>
        </Container>
    )
}