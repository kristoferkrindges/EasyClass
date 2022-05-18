import React, { useState, useRef } from "react";
import { Container } from "./style";
import { useUserContext } from "../../../context/userContext";

// export default function Fields() {
const Signup = () => {
	const emailRef = useRef();
	const nameRef = useRef();
	const psdRef = useRef();
	const { registerUser } = useUserContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const password = psdRef.current.value;
		if (email && name && password) registerUser(email, name, password);
	};
	const initialState = {
		type: "",
		name: "",
		lastname: "",
		email: "",
		password: "",
	};

	const [fields, setFields] = useState(initialState);

	const handleFieldsChange = (e) =>
		setFields({
			...fields,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleSubmit = (event) => {
		//props.addPlanet(fields)
		event.preventDefault();
		setFields(initialState);
	};

	return (
		<Container>
			<div className="form">
				<h2>Cadastro</h2>
				<form onSubmit={onSubmit}>
					{/* <label>Eu sou um</label>
                <label>Aluno</label>
                <input type="radio" id="aluno" name="aluno" value={fields.type} onChange={handleFieldsChange}></input>
                <label>Professor</label>
                <input type="radio" id="professor" name="professor" value={fields.type}></input> */}
					<input
						placeholder="Nome"
						id="name"
						name="name"
						type="name"
						ref={nameRef}
						value={fields.name}
						onChange={handleFieldsChange}
					/>
					{/* <input
					placeholder="Sobrenome"
					id="lastname"
					name="lastname"
					type="text"
					value={fields.lastname}
					onChange={handleFieldsChange}
				/> */}
					<input
						placeholder="Email"
						id="email"
						name="email"
						type="email"
						ref={emailRef} /*value={fields.email}*/
					/>
					<input
						placeholder="Senha"
						id="password"
						name="password"
						type="password"
						ref={psdRef} /*value={fields.password}*/
					/>
					{/* <input placeholder="Confirmar senha" type="text" /> */}
					<button type="submit">Registrar</button>
				</form>
			</div>
		</Container>
	);
};

export default Signup;
