import React, {useState} from "react";
import { useParams } from "react-router-dom";
import logo from "../../imagens/logo.jpeg"
import Bar from "../Shared/Bar"

function SearchTeacher() {
	let { username } = useParams();
	return (
		<>
			<Bar
				logo={logo}
				name={"Kristofer Krindges"}
				type={"Estudante"}
				msg={4}
			/>
			<div>This is the profile page for {username}!</div>
		</>
	);
}

export default SearchTeacher;
