import React, { useState } from "react";
import logo from "../../../assets/logo.jpeg";
import Bar from "../Bar";
import { Container, Content } from "./style";
import { useUserContext } from "../../../context/userContext";
import Options from "./Options";

function Dash(props) {
	const { user } = useUserContext();
	return (
		<Container>
			<Bar logo={logo} name={user.displayName} type={props.type} msg={4} />
			<Content>
				<Options
					img={user.photoURL ? user.photoURL : logo}
					name={user.displayName}
					email={user.email}
					type={props.type}
				/>
			</Content>
		</Container>
	);
}

export default Dash;
