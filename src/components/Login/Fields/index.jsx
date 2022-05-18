import React, { useRef } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";

// function FieldsLogin() {
const Signin = () => {
	const emailRef = useRef();
	const psdRef = useRef();
	const { signInUser, forgotPassword } = useUserContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = psdRef.current.value;
		if (email && password) signInUser(email, password);
	};

	const forgotPasswordHandler = () => {
		const email = emailRef.current.value;
		if (email)
			forgotPassword(email).then(() => {
				emailRef.current.value = "";
				alert("Email enviado para a sua caixa de entrada!");
			});
	};

	const navigate = useNavigate();

	return (
		<Container>
			<div className="form">
				<h2>Login</h2>
				<form onSubmit={onSubmit}>
					<input
						placeholder="Email"
						// id="email"
						type="email"
						// name="email"
						ref={emailRef}
					/>
					<input
						placeholder="Senha"
						// id="password"
						type="password"
						// name="password"
						ref={psdRef}
					/>
					<button
						type="submit"
						// onClick={() => {
						// 	navigate("/profile");
						// }}
					>
						Entrar
					</button>
					<p onClick={forgotPasswordHandler}>Esqueceu a senha?</p>
				</form>
			</div>
		</Container>
	);
};

// export default FieldsLogin;
export default Signin;
