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
	Drop,
	IconSearch,
} from "./style";
import NewCards from "../../../Shared/NewCards";
import Loading from "../../../Shared/Loader";
import api from "../../../../services/api";
import Carrousel from "react-elastic-carousel";

function Search() {
	// Loader
	const [removeLoading, setRemoveLoading] = useState(false);

	//Filter(input)
	const [searchName, setSearchName] = useState("");

	//Select/Teacher
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
	//bug carrousel
	const [car, setCar] = useState(["1"]);
	useEffect(() => {
		function Carl() {
			setCar(["2"]);
		}

		Carl();
	}, []);
	// Carrousel
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
					{/* <input type="checkbox" className="check" name="" value=""></input> */}
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
					{/* <Result>
						<Ul>
							{teachers.length > 0 &&
								teachers
									.filter((value) => {
										if (searchName === "") {
											return 0;
										} else if (
											value.firstName
												.toLowerCase()
												.includes(searchName.toLowerCase())
										) {
											// setCount(value.length);
											return value;
										}
									})
									.map((value, key) => (
										<Li key={key}>
											<Span>{value.firstName}</Span>
										</Li>
									))}
						</Ul>
					</Result> */}
				</ContainerInput>
				{/* <ContainerInput>
					<TextInput>Nome</TextInput>
					<Drop>
						<Input 
							type="text"
							placeholder="Nome do professor..."
							onChange={(e) => setSearchName(e.target.value)}
						/>
						<Icon href="#"></Icon>
					</Drop>
				</ContainerInput> */}
				<ContainerSelect>
					{/* <TextSelect>Categoria</TextSelect> */}
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
			{/* <ListCards>
				{teachers.length > 0 &&
					teachers.filter((value) =>{
						if(searchName === ""){
							return value
						} else if(value.firstName.toLowerCase().includes(searchName.toLowerCase())){
							return value
						}
					}).map((value, key) => (
						<NewCards
							img={logo}
							stars={value.rating}
							name={value.firstName}
							lastName={value.lastName[0]}
							subject={value.subjects}
							price={`R$${value.hourlyPrice} Hr/Aula`}
							id={value.teacherId}
							onClick={routeChange}
							key={key}
						/>
						
					))
				}
				{!removeLoading && <Loading/>}
			</ListCards> */}
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
			{/* <Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={count < 3 ? count : 3}
				navigation={count >= 3 ? false : true}
				pagination={{ clickable: true }}
				loop={count >= 3 ? true : false}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{teachers.length > 0 &&
					teachers
						.filter((value) => {
							if (searchName === "") {
								// setCount(value.length)

								return value;
							} else if (
								value.firstName.toLowerCase().includes(searchName.toLowerCase())
							) {
								// setCount(value.length);
								return value;
							}

						})
						.map((value, key) => (
							<SwiperSlide key={key}>
								<NewCards
									img={logo}
									stars={value.rating}
									name={value.firstName}
									lastName={value.lastName[0]}
									subject={value.subjects}
									price={`R$${value.hourlyPrice} Hr/Aula`}
									id={value.teacherId}
									onClick={routeChange}
									key={key}
								/>
							</SwiperSlide>
						))}
				{!removeLoading && <Loading />}
			</Swiper> */}
		</Container>
	);

	// 					}).map((value, key) => (
	// 						<NewCards
	// 							img={logo}
	// 							stars={value.rating}
	// 							name={value.firstName}
	// 							lastName={value.lastName[0]}
	// 							subject={value.subjects}
	// 							price={`R$${value.hourlyPrice} Hr/Aula`}
	// 							id={value.userId}
	// 							onClick={routeChange}
	// 							key={key}
	// 						/>

	// 					))
	// 			}
	// 			{!removeLoading && <Loading/>}
	// 		</Carrousel>
	// 		</ListCards>

	//     </Container>
	// )
}

export default Search;
