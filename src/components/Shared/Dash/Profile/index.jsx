import React from "react";
import { Link } from "react-router-dom";

import {
	Container,
	Card,
	Image,
	NameProfession,
	Name,
	Old,
	IoPencil,
} from "./style";

function Profile(props) {
	return (
		<Container>
			<Card>
				<Image>
					<img className="logo" src={props.img} />
				</Image>
				<NameProfession>
					<Name>{props.name}</Name>
					<Old>{props.email}</Old>
					<Old>Membro desde: {props.time}</Old>
					<Link to="/editprofile">
						<IoPencil></IoPencil>
					</Link>
				</NameProfession>
			</Card>
		</Container>
	);
}

export default Profile;
