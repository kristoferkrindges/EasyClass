import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

function FieldsLogin() {
	const navigate = useNavigate();

	return (
		<Container>
			<div className="form">
				<h2>Login</h2>
				<input
					id="email"
					name="email"
					type="text"
					placeholder="Email"
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<input
					id="password"
					name="password"
					type="text"
					placeholder="Senha"
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>
				<button
					onClick={() => {
						navigate("/profile");
					}}
				>
					Entrar
				</button>
				<h3>Novo usuário?</h3>
				<p
					onClick={() => {
						navigate("/register");
					}}
				>
					Clique aqui
				</p>
			</div>
		</Container>
	);
}

export default FieldsLogin;
