import React, { useState } from "react";
import SignIn from "../Form/SignIn";
import Signup from "../../Register/Fields/SignUp";
import { Container } from "./style";

const Auth = () => {
	const [index, setIndex] = useState(false);
	const toggleIndex = () => {
		setIndex((prevState) => !prevState);
	};
	return (
		<Container>
			<div className="container">
				{!index ? <SignIn /> : <Signup />}
				<p className="novo_usuario" onClick={toggleIndex}>
					{!index ? "Novo usuário? Clique aqui " : "Já tem uma conta?"}
				</p>
			</div>
		</Container>
	);
};

export default Auth;
