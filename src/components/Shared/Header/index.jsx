import React from "react";
import {Container} from "./styles";
import logo from "../../../imagens/logo.jpeg"
import { Link } from "react-router-dom";

export default function Header(props){
    return(
        <Container>
            <Link to="/"><img className="logo" src={logo}></img></Link>
            <nav>
                <ul className="nav_links">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <Link to="/about"><li><a>Sobre</a></li></Link>
                    <Link to="/profile"><li><a>Perfil</a></li></Link>
                </ul>
            </nav>
            <Link to="/login"><a><button>Entrar</button></a></Link>
        </Container>
    )
}