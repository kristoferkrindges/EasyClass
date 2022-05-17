import React, { useState } from "react";
import { Container } from "./style";

export default function Fields() {
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
				{/* <label>Eu sou um</label>
                <label>Aluno</label>
                <input type="radio" id="aluno" name="aluno" value={fields.type} onChange={handleFieldsChange}></input>
                <label>Professor</label>
                <input type="radio" id="professor" name="professor" value={fields.type}></input> */}
				<input
					placeholder="Nome"
					id="name"
					name="name"
					type="text"
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
					type="text" /*value={fields.email}*/
				/>
				<input
					placeholder="Senha"
					id="password"
					name="password"
					type="text" /*value={fields.password}*/
				/>
				<input placeholder="Confirmar senha" type="text" />
				<button>Criar usuário</button>
			</div>
		</Container>
	);
}
