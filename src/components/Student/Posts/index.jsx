import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Bar from "../../Shared/Bar";
import { Container, Context } from "./style";
import { useSessionContext } from "../../../context/SessionContextProvider";
import logo from "../../../assets/logo.jpeg";
import Message from "./Message/";

function Posts(props) {
	const { user } = useSessionContext();

	return (
		<Container>
			<Bar logo={logo} name={user.displayName} type={props.type} msg={4} />
			<Context>
				<Message
					subject={"Música"}
					name={"José"}
					type={"Aceito"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
				<Message
					subject={"Artes"}
					name={"Gustavo"}
					type={"Aguardando"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
				<Message
					subject={"Física"}
					name={"Nathalia"}
					type={"Recusado"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
				<Message
					subject={"Biologia"}
					name={"André"}
					type={"Aceito"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
				<Message
					subject={"Dança"}
					name={"Samanta"}
					type={"Aguardando"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
				<Message
					subject={"Guitarra"}
					name={"Flavio"}
					type={"Recusado"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
			</Context>
		</Container>
	);
}

export default Posts;
