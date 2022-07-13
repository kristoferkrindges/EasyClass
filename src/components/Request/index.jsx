import React from "react";
import Bar from "../Shared/Bar";
import { Container, Context } from "./style";
import { useUserContext } from "../../context/userContext";
import logo from "../../assets/logo.jpeg";
import RequestTeacher from "../RequestTeacher";

function Request(props) {
	const { user, setPhoto, photoURL, handleChange, handleClick } =
		useUserContext();

	return (
		<Container>
			<Bar logo={logo} name={user.displayName} type={props.type} msg={4} />
			<Context>
				<RequestTeacher></RequestTeacher>
			</Context>
		</Container>
	);
}

export default Request;
