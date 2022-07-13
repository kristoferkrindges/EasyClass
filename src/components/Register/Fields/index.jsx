import React, { useState, useRef } from "react";
import { Container } from "./style";
import { useUserContext } from "../../../context/userContext";

const Signup = () => {
	const image = useRef();
	const emailRef = useRef();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const psdRef = useRef();
	const roleRef = useRef();
	const { registerUser } = useUserContext();
	const initialState = {
		role: "",
		firstName: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [fields, setFields] = useState(initialState);

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const firstName = firstNameRef.current.value;
		const lastName = lastNameRef.current.value;
		const password = psdRef.current.value;
		const role = roleRef.current.value;
		if (email
			&& firstName
			&& lastName
			&& password) {
			registerUser(
				email,
				firstName,
				lastName,
				password,
				role
			);
		}
	};

	const handleFieldsChange = (e) =>
		setFields({
			...fields,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	return (
		<Container>
			<div className="form">
				<h2>Cadastro</h2>
				<form onSubmit={onSubmit}>
					<h3>O que quero fazer?</h3>
					<select ref={roleRef}>
						<option value="TEACHER">Ensinar</option>
						<option value="STUDENT">Aprender</option>
					</select>
					<input
						placeholder="Nome"
						id="firstName"
						name="firstName"
						type="text"
						ref={firstNameRef}
						value={fields.firstName}
						onChange={handleFieldsChange}
					/>
					<input
						placeholder="Sobrenome"
						id="lastname"
						name="lastname"
						type="text"
						ref={lastNameRef}
						value={fields.lastname}
						onChange={handleFieldsChange}
					/>
					<input
						placeholder="Email"
						id="email"
						name="email"
						type="email"
						ref={emailRef}
						value={fields.email}
						onChange={handleFieldsChange}
					/>
					<input
						placeholder="Senha"
						id="password"
						name="password"
						type="password"
						ref={psdRef}
						value={fields.password}
						onChange={handleFieldsChange}
					/>
					<input
						placeholder="Confirmar Senha"
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						value={fields.confirmPassword}
						onChange={handleFieldsChange}
					/>
					<input
						type="file"
						placeholder="Insira a sua imagem de perfil"
						name="image"
					/>
					<button type="submit">Registrar</button>
				</form>
			</div>
		</Container>
	);
};

export default Signup;
