import React from "react";
import {Container, Calendar, Edit, Msg, Search} from "./style"

function SideBar(props) {
	return (
		<Container>
            <center>
                <img src={props.logo} className="print"></img>
                <h2>{props.name}</h2>
                <h3>Perfil: {props.type}</h3>
            </center>
            <a><Edit/><span>Editar perfil</span></a>
            <a><Calendar/><span>Agenda de Aulas</span></a>
            <a><Search/><span>Buscar Professor</span></a>
            <a><Msg/><span>Mensagens ({props.msg})</span></a>
        </Container>
	);
}

export default SideBar