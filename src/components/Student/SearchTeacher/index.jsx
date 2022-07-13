import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import Bar from "../../Shared/Bar";
import { Container, Content } from "./style";
import Search from "./Search";
import { useUserContext } from "../../../context/userContext";

function SearchTeacher() {
	const { user, photoURL } = useUserContext();
	let { username } = useParams();
	return (
		<Container>
			<Bar logo={photoURL} name={user.displayName} type={""} msg={4} />
			<Content>
				<Search />
			</Content>
		</Container>
	);
}

export default SearchTeacher;
