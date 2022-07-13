import React, { useState } from "react";
import logo from "../../../assets/logo.jpeg";
import Bar from "../Bar";
import { Container, Content } from "./style";
import { useUserContext } from "../../../context/userContext";
import Ratings from "./Ratings";

function Esqueleton(props) {
	const { user } = useUserContext();
	return (
		<Container>
			<Bar logo={logo} type={props.type} msg={4} />
			<Content>
				<Ratings img={logo} name={"Richard"} type={"Professor"} />
			</Content>
		</Container>
	);
}

export default Esqueleton;
