import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Controller,
	Phrase,
	Searchs,
	Input,
	Select,
	ListCards,
	ContainerInput,
	ContainerSelect,
	Option,
	TextInput,
	TextSelect,
	Drop,
	IconSearch,
	Result,
	Ul,
	Li,
	Span,
} from "./style";
import logo from "../../../../assets/logo.jpeg";
import NewCards from "../../../Shared/NewCards";
import Loading from "../../../Shared/Loader";
import api from "../../../../services/api";
import Carrousel from "react-elastic-carousel";

function Search() {
	const [removeLoading, setRemoveLoading] = useState(false);
	const [searchName, setSearchName] = useState("");
	const [teachers, setTeachers] = useState([]);

	useEffect(() => getTeachers(), []);

	let navigate = useNavigate();

	const routeChange = (id) => {
		console.log(id);
		let path = `/request?teacherId=${id}`;
		navigate(path);
	};

	const getTeachers = () => {
		console.log("get teachers");
		api
			.get("/user?role=TEACHER")
			.then(({ data }) => {
				setTeachers(data);
				console.log(data);
				setRemoveLoading(true);
			})
			.catch((error) => {
				console.error("error", error);
			});
	};

	const getTeachersSubjectId = (id) => {
		console.log("get teachers by subject" + id);
		if (id)
			api
				.get("/user?subject=" + id.toUpperCase())
				.then(({ data }) => {
					setTeachers(data);
					console.log(data);
					setRemoveLoading(true);
				})
				.catch((error) => {
					console.error("error", error);
				});
	};

	const [count, setCount] = useState(teachers.length);
	useEffect(setCount, []);
	const [car, setCar] = useState(["1"]);
	useEffect(() => {
		function Carl() {
			setCar(["2"]);
		}

		Carl();
	}, []);
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];
	let number;

	return (
		<Container>
			<Controller>
				<Phrase>Encontre o Professor que mais combina com você!</Phrase>
			</Controller>
			<Searchs>
				<ContainerInput>
					<Drop>
						<Input
							type="text"
							placeholder="Nome do professor..."
							onChange={(e) => {
								setSearchName(e.target.value);
								setCar(["2"]);
							}}
						/>
						<TextInput forName="check">
							<IconSearch></IconSearch>
						</TextInput>
					</Drop>
				</ContainerInput>
				<ContainerSelect>
					<Select onChange={(e) => getTeachersSubjectId(e.target.value)}>
						<Option value="">Categoria</Option>
						<Option value="English">Inglês</Option>
						<Option value="History">Historia</Option>
						<Option value="Guitar">Guitarra</Option>
						<Option value="Biology">Biologia</Option>
						<Option value="Programming">Programação</Option>
						<Option value="Zumba">Zumba</Option>
						<Option value="Drums">Bateria</Option>
					</Select>
				</ContainerSelect>
			</Searchs>
			<ListCards>
				{car.length > 0 &&
					car.map((value, key) => (
						<Carrousel breakPoints={breakPoints}>
							{teachers.length > 0 &&
								teachers
									.filter((value) => {
										if (searchName === "") {
											return value;
										} else if (
											value.firstName
												.toLowerCase()
												.includes(searchName.toLowerCase())
										) {
											return value;
										}
									})
									.map((value, key) => (
										<NewCards
											img={value.photoUrl}
											stars={value.rating}
											name={value.firstName}
											lastName={value.lastName[0]}
											subject={value.subject}
											price={`R$${value.hourlyPrice} Hr/Aula`}
											id={value.userId}
											onClick={routeChange}
											key={key}
										/>
									))}
							{!removeLoading && <Loading />}
						</Carrousel>
					))}
			</ListCards>
		</Container>
	);
}

export default Search;
