import React, {useState} from "react";
import { useParams } from "react-router-dom";
import logo from "../../../imagens/logo.jpeg"
import Bar from "../../Shared/Bar"
import {Container} from "./style"
import Search from "./Search"

function SearchTeacher() {
	let { username } = useParams();
	return (
		<Container>
			<Bar
				logo={logo}
				name={"Kristofer Krindges"}
				type={"Aluno"}
				msg={4}
			/>
			<Search/>
		</Container>
	);
}

export default SearchTeacher;
