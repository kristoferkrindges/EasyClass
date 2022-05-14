import React from "react";
import {Container} from "./styles";
import logo from "../../../imagens/logo.jpeg"
export default function Header(){
    return(
        <Container>
            <img className="logo" src={logo}></img>
            <nav>
                <ul className="nav_links">
                    <li><a>Sobre</a></li>
                    <li><a>Ajuda</a></li>
                </ul>
            </nav>
            <a><button>Entrar</button></a>
        </Container>
    )
}