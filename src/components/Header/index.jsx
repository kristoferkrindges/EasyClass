import React from "react";
import {Container} from "./styles";
import logo from "../../imagens/logo.jpeg"
export default function Header(){
    return(
        <Container>
            <img className="logo" src={logo}></img>
            <nav>
                <ul className="nav_links">
                    <li><a>Ajuda</a></li>
                    <li><a>Busca</a></li>
                    <li><a>Entrar</a></li>
                </ul>
            </nav>
            <a><button>Criar conta</button></a>
        </Container>
    )
}