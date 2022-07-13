import React, { useState } from "react";
import logo from "../../../assets/logo.jpeg";
import Bar from "../Bar";
import { Container, Content } from "./style";
import { useSessionContext } from "../../../context/SessionContextProvider";
import Ratings from "./Ratings";

function Esqueleton(props) {
	const { user } = useSessionContext();
	return (
		<Container>
			{/* logo={logo} name={user.displayName} type={props.type} msg={4} */}
			<Bar logo={logo} type={props.type} msg={4} />
			<Content>
				<Ratings img={logo} name={"Richard"} type={"Professor"} />
			</Content>
		</Container>
	);
}

export default Esqueleton;
