import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "../Shared/SideNav"
import logo from "../../imagens/logo.jpeg"

function Profile() {
	let { username } = useParams();
	return (
		<>
			<SideNav
				logo={logo}
				name={"Kristofer"}
				type={"Estudante"}
				msg={4}
			/>
			<div>This is the profile page for {username}!</div>
		</>
	);
}

export default Profile;
