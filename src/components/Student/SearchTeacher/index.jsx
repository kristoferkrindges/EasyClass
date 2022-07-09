import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import Bar from "../../Shared/Bar";
import { Container, Content } from "./style";
import Search from "./Search";

function SearchTeacher() {
	let { username } = useParams();
	return (
		<Container>
			<Bar logo={logo} name={"Kristofer Krindges"} type={"Aluno"} msg={4} />
			<Content>
				<Search />
			</Content>
		</Container>
	);
}

export default SearchTeacher;
