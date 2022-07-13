import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
} from "react-icons/io5";

export const Container = styled.div`
	border-radius: 1rem;
	height: 100%;
	padding: 1rem;
	background-color: #3b393b;
	width: 100%;
	box-shadow: red;
	transition: 0.4s ease-in-out;
	z-index: 1;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content;
		width: 100%;
		margin: 2rem 0;

		&::before {
			height: 10%;
			width: 76%;
			border-radius: 20px 20px 20px 20px;
		}
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`;
export const NameProfession = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: white;

	a {
		text-decoration: none;
		color: white;
	}
`;

export const Image = styled.div`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background: #94449e;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid #fff;
	}
	img:hover {
		opacity: 0.5;
	}
`;

export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: #fff;
		opacity: 0.6;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 1;
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		right: 5px;
	}
`;

export const Name = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1.5rem;
	font-weight: 600;
	color: white;
	border-radius: 10px;
`;

export const Old = styled.span`
	font-size: 1rem;
	font-weight: 600;
	color: white;
	margin-bottom: 2%;
`;

export const IoCamera = styled(IoCameraOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPencil = styled(IoPencilOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;
