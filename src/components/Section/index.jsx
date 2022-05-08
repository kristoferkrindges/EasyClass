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
        }).catch((error) => {
            console.error('error',error);
          })
        console.log(teachers)
    }, [])

    return(
        <Container>
            <div className="seletor">
                <h3>O QUE VOCÊ PROCURA?</h3>
                <select className="selt">
                <option value="">Inglês</option>
                <option value="">Historia</option>
                <option value="">Música</option>
                <option value="">Biologia</option>
            </select>
            </div>
            <ListCards>
                <Cards
                    img={logo}
                    estrela={"xxxxx"}
                    name={"Carlos"}
                    lastName={""}
                    disciplina={"Inglês"}
                    preco={"R$65 Hr/Aula"}
                    id={1}
                    
                />
                <Cards
                    img={logo}
                    estrela={"xxxxx"}
                    name={"Carlos"}
                    lastName={""}
                    disciplina={"Inglês"}
                    preco={"R$65 Hr/Aula"}
                    id={1}
                    
                />
                <Cards
                    img={logo}
                    estrela={"xxxxx"}
                    name={"Carlos"}
                    lastName={""}
                    disciplina={"Inglês"}
                    preco={"R$65 Hr/Aula"}
                    id={1}
                    
                />
            </ListCards>
            <p>Maiores buscas com os Melhores Profissionais</p>

        </Container>
    )
}