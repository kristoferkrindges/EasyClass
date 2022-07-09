import React, { useState, useRef } from "react";
import { Container } from "./style";
import { useUserContext } from "../../../context/userContext";
import { auth } from "../../../firebase";
import event from "events";
import api from "../../../services/api";

// export default function Fields() {
const Signup = () => {
	const image = useRef();
	const emailRef = useRef();
	const nameRef = useRef();
	const psdRef = useRef();
	const { registerUser } = useUserContext();
	const initialState = {
		type: "",
		name: auth && auth.currentUser && auth.currentUser.displayName ? auth.currentUser.displayName : "",
		lastname: "",
		email: auth && auth.currentUser && auth.currentUser.email ? auth.currentUser.email : "",
		password: "",
	};
	const [fields, setFields] = useState(initialState);

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const password = psdRef.current.value;
		if (email && name && password) registerUser(email, name, password);
	};

	const handleFieldsChange = (e) =>
		setFields({
			...fields,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleSubmit = (event) => {
		event.preventDefault();
		setFields(initialState);
	};

	// const postValues = () => {
	// 	console.log("post values");
	// 	api
	// 		.post("/teacher")
	// 		.then(({ data }) => {
	// 			setTeachers(data);
	// 			console.log(data);
	// 		})
	// 		.catch((error) => {
	// 			console.error("error", error);
	// 		});
	// };
	// const userId = () => {
	// 	console.log("post values");
	// 	api
	// 		.post("/user")
	// 		.then(({ data }) => {
	// 			console.log(data);
	// 		})
	// 		.catch((error) => {
	// 			console.error("error", error);
	// 		});
	// };

	return (
		<Container>
			<div className="form">
				<h2>Cadastro</h2>
				<form onSubmit={onSubmit}>
					<h3>O que quero fazer?</h3>
					<select>
						<option value={fields.type}>Ensinar</option>
						<option value={fields.type}>Aprender</option>
					</select>
					<input
						placeholder="Nome"
						id="name"
						name="name"
						type="name"
						ref={nameRef}
						value={fields.name}
						onChange={handleFieldsChange}
					/>
					<input
						placeholder="Sobrenome"
						id="lastname"
						name="lastname"
						type="text"
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
						id="confirm-password"
						name="confirm-password"
						type="password"
						value={""}
					/>
					<input
						type="file"
						placeholder="Insira a sua imagem de perfil"
						name="image"
						/*onChange={handleChange}*/
					/>
					<button type="submit">Registrar</button>
				</form>
			</div>
		</Container>
	);
};

export default Signup;
