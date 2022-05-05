import React from "react";
import {Container, StarIcon} from "./styles"


export default function Cards({img, estrela, name, disciplina, preco, id}){
    return(
        <li>
            <Container>
                <div>
                    <img className="logo" src={img}></img>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                </div>
                <div>
                    <h2>{name}</h2>
                    <hr></hr>
                    <ul>
                        <li>{disciplina}</li>
                        <li>{disciplina}</li>
                    </ul>
                    <h2>{preco}</h2>
                </div>
            </Container>
        </li>
    )
}