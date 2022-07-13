import React from "react";
import {
	Container,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Subject,
	SubjectUl,
	Li,
	Rating,
	Buttons,
	HireMe,
	StarIcon1,
	StarIcon2,
} from "./style";
export default function Cards({
	img,
	stars,
	name,
	lastName,
	subject,
	id,
	onClick,
}) {
	const number = 5 - stars;
	const star = Array.from({ length: stars }, (v, k) => k + 1);
	const star2 = Array.from({ length: number }, (v, k) => k + 1);
	const eventClick = (event) => {
		event.stopPropagation();
		if (onClick) onClick(id);
	};
	return (
		<li>
			<Container>
				<CardContent>
					<Image>
						<Logo src={img} />
					</Image>
					<NameSubject>
						<Name>{`${name} ${lastName}`}</Name>
						<Subject>
							<SubjectUl>
								{/* {subject.map((value, key) => (
									<Li key={key}>{value}</Li>
								))} */}
								<Li>{subject[0]}</Li>
							</SubjectUl>
						</Subject>
					</NameSubject>
					<Rating>
						{star.map((id, index) => (
							<StarIcon1 key={index}></StarIcon1>
						))}
						{star2.map((id, index) => (
							<StarIcon2 key={index}></StarIcon2>
						))}
					</Rating>
					<Buttons onClick={eventClick}>
						<HireMe>Agendar Aula</HireMe>
					</Buttons>
				</CardContent>
			</Container>
		</li>
	);
}
