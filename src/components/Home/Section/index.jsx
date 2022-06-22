import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
	Container, 
	ListCards, 
	ContentCarrousel,
	SelectMenu,
	SelectBtn,
	BtnText,
	IoArrowDown,
	IoBook,
	Option,
	Options,
	OptionText,

} from "./styles";
import Cards from "../../Shared/Cards";
import NewCards from "../../Shared/NewCards";
import Loading from "../../Shared/Loader"
import logo from "../../../assets/logo.jpeg";
import api from "../../../services/api";
import Carrousel from "react-elastic-carousel"

export default function Section() {
	// Loader
	const [removeLoading, setRemoveLoading] = useState(false)

	// Select state
    const [click, setClick] = useState(false)

    const [market, setMarket] = useState("Escolha")
    console.log(market)

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
			.get("/teacher")
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
		api
			.get("/teacher?subject=" + id)
			.then(({ data }) => {
				setTeachers(data);
				console.log(data);
				setRemoveLoading(true);
			})
			.catch((error) => {
				console.error("error", error);
			});
	};
	// Carrousel
	const breakPoints = [
		{width: 800, itemsToShow: 1},
		{width: 1250, itemsToShow: 2},
		{width: 1300, itemsToShow: 3},
		{width: 1500, itemsToShow: 4},
	]
	return (
		<Container>
			<div className="seletor">
				<h3>O QUE VOCÊ PROCURA?</h3>
				{/* <SelectMenu>
					<SelectBtn isOpen={click} onClick={() => setClick((p) => !p)}>
						<BtnText>{market}</BtnText>
						<IoArrowDown style={!click ? { transform: "rotate(-180deg)" } : {}}></IoArrowDown>
					</SelectBtn>
					<Options style={!click ? { display: "none" } : {}}>
						<Option 
							onClick={(e) => getTeachersSubjectId("")}
						>
							<IoBook></IoBook>
							<OptionText>Escolha</OptionText>
						</Option>
						<Option 
							onClick={(e) => getTeachersSubjectId("History")}
							// isOpen={click} onClick={() => setClick((p) => !p)}
						>
							<IoBook></IoBook>
							<OptionText>História</OptionText>
						</Option>
						<Option 
							onClick={(e) => getTeachersSubjectId("Guitar")}
							// isOpen={click} onClick={() => setClick((p) => !p)}
						>

							<OptionText>Guitarra</OptionText>
						</Option>
						<Option 
							onClick={(e) => getTeachersSubjectId("Biology")}
							// isOpen={click} onClick={() => setClick((p) => !p)}
						>

							<OptionText>Biologia</OptionText>
						</Option>
						<Option onClick={(e) => getTeachersSubjectId("Programming")}>

							<OptionText>Programação</OptionText>
						</Option>
					</Options>
				</SelectMenu> */}
				<select
					onChange={(e) => getTeachersSubjectId(e.target.value)}
					className="selt"
				>	
					<option value="">Escolha</option>
					<option value="English">Inglês</option>
					<option value="History">Historia</option>
					<option value="Guitar">Guitarra</option>
					<option value="Music">Música</option>
					<option value="Biology">Biologia</option>
					<option value="Programming">Programação</option>
				</select>
			</div>
			<ContentCarrousel>
				<Carrousel breakPoints={breakPoints}>
					{teachers.length > 0 &&
						teachers.map((value, key) => (
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
				</Carrousel>
			</ContentCarrousel>
			<p>Melhores profissionais do mercado!</p>
		</Container>
	);
}

// {teachers.map((value, key) => (
// 	<NewCards
// 		img={logo}
// 		stars={value.rating}
// 		name={value.firstName}
// 		lastName={value.lastName[0]}
// 		subject={value.subjects}
// 		price={`R$${value.hourlyPrice} Hr/Aula`}
// 		id={value.teacherId}
// 		onClick={routeChange}
// 		key={key}
// 	/>
	
// ))}