import React from "react";
import { Container, StarIcon } from "./styles";
export default function Cards({
	img,
	stars,
	name,
	lastName,
	subject,
	price,
	id,
	onClick,
}) {
	const star = Array.from({ length: stars }, (v, k) => k + 1);
	const eventClick = (event) => {
		event.stopPropagation();
		if (onClick) onClick(id);
	};
	return (
		<li onClick={eventClick}>
			<Container>
				<div>
					<img className="logo" src={img}></img>
					{/* {stars?.star.forEach(stars => {
                        <StarIcon></StarIcon>
                    })} */}
					<StarIcon></StarIcon>
					<StarIcon></StarIcon>
					<StarIcon></StarIcon>
					<StarIcon></StarIcon>
					<StarIcon></StarIcon>
				</div>
				<div>
					<h2>{`${name} ${lastName}`}</h2>
					<hr></hr>
					<ul>
						<li>{subject}</li>
					</ul>
					<h2>{price}</h2>
				</div>
			</Container>
		</li>
	);
}
