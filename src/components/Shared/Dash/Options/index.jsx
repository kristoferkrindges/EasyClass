import React, { useContext, useState, useEffect } from "react";
import {
	Layout,
	Title,
	BreadCrumbs,
	InfoData,
	Data,
	ContentData,
	Itter,
	Info,
	Call,
} from "./style";
import { Link } from "react-router-dom";
import Tags from "../Tags";
import {
	IoBookmarks,
	IoAccessibility,
	IoCalendarClear,
	IoFileTrayFull,
} from "react-icons/io5";
import Profile from "../Profile";
import Message from "../../../Student/Posts/Message";
import logo from "../../../../assets/logo.jpeg";
import api from "../../../../services/api";

const Options = (props) => {
	let search;
	let whoami;
	if (props.type == "Aluno") {
		search = "/SearchTeacher";
		whoami = "Professores";
	} else {
		whoami = "Alunos";
		search = "/SearchTeacher";
	}
	const doc = [
		{
			card: "Aulas",
			icon: <IoBookmarks />,
			link: "",
		},
		{
			card: whoami,
			icon: <IoAccessibility />,
			link: search,
		},
		{
			card: "Calendário",
			icon: <IoCalendarClear />,
			link: "",
		},
		{
			card: "Mensagens",
			icon: <IoFileTrayFull />,
			link: "/posts",
		},
	];
	return (
		<Layout>
			<Title>
				Bem-vindo! <span>{props.name}</span>
			</Title>
			<InfoData>
				{doc.map((value, key) => (
					<Link to={value.link}>
						<Tags key={key} value={value.card} icon={value.icon} />
					</Link>
				))}
			</InfoData>
			<Data>
				<ContentData>
					<Profile
						name={props.name}
						email={props.email}
						img={props.img}
					></Profile>
				</ContentData>
				<ContentData>
					<Call>
						<h1>Calendário</h1>
					</Call>
				</ContentData>
			</Data>
			<Info>
				<Message
					subject={"Música"}
					name={"José"}
					type={"Aceito"}
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
					subject={"Física"}
					name={"Nathalia"}
					type={"Recusado"}
					logo={logo}
					date={"15/11/2022"}
					time={"10:00"}
				/>
			</Info>
		</Layout>
	);
};

export default Options;
