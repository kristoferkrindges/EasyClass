import React, { useState } from "react";
import {
	Card,
	Title,
	Logo,
	Name,
	Stars,
	StarIcon,
	Text,
	Buttons,
	HireMe,
	Layout,
	IoClose,
	Container,
} from "./style";

const colors = {
	purple: "#94449e",
	gray: "#a9a9a9",
};

function Ratings(props) {
	const stars = Array(5).fill(0);
	const [Value, setValue] = useState(0);
	console.log(Value);
	const [hoverValue, setHoverValue] = useState(undefined);

	const handleClick = (value) => {
		setValue(value);
	};

	const handleMouseOver = (value) => {
		setHoverValue(value);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	return (
		<Container>
			<Card>
				<Layout>
					<Title>
						Avalie sua Aula <IoClose onClick={() => props.closeModal(false)} />
					</Title>

					<Logo>
						<img src={props.img} />
					</Logo>
					<Name>
						{props.type}: {props.name}
					</Name>

					<Stars>
						{stars.map((_, index) => {
							return (
								<StarIcon
									key={index}
									size={24}
									color={
										(hoverValue || Value) > index ? colors.purple : colors.gray
									}
									onClick={() => handleClick(index + 1)}
									onMouseOver={() => handleMouseOver(index + 1)}
									onMouseLeave={handleMouseLeave}
								/>
							);
						})}
					</Stars>

					<Text>
						<Name>Sua opinião</Name>
						<textarea
							spellcheck="false"
							placeholder="Como foi a aula?"
							required
						/>
					</Text>
					<Buttons onClick={""}>
						<HireMe>Enviar</HireMe>
					</Buttons>
				</Layout>
			</Card>
		</Container>
	);
}

export default Ratings;
