import React, { useState } from "react";
import Signin from "../Fields/index";
import Signup from "../../Register/Fields/index";
import { Container } from "./style";

const Auth = () => {
	const [index, setIndex] = useState(false);
	const toggleIndex = () => {
		setIndex((prevState) => !prevState);
	};
	return (
		<Container>
			<div className="container">
				{!index ? <Signin /> : <Signup />}
				<p className="novo_usuario" onClick={toggleIndex}>
					{!index ? "Novo usuário? Clique aqui " : "Já tem uma conta?"}
				</p>
			</div>
		</Container>
	);
};

export default Auth;
