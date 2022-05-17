import React from "react";
import FieldsLogin from "../Fields";
import { Container } from "./style";

function FormLogin() {
	return (
		<Container>
			<form>
				<FieldsLogin />
				<h3>Usuário logado:</h3>
				<button>Sair</button>
			</form>
		</Container>
	);
}

export default FormLogin;
