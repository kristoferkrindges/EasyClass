import styled from "styled-components";
import { IoStar } from "react-icons/io5";

export const Container = styled.div`
	background: #fff;
	border-radius: 20px;
	position: relative;
	margin: 20px 0;
	height: 42vh;
	width: 36vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;

	&::before {
		content: "";
		position: absolute;
		height: 43%;
		width: 100%;
		background: #94449e;
		border-radius: 20px 20px 0 0;
	}
`;
export const Image = styled.div`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background: #94449e;
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #fff;

	&:hover {
		opacity: 0.5;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 100;
`;
export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
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
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: #333;
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;
export const Subject = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
`;
export const SubjectUl = styled.ul``;
export const Li = styled.li``;

export const Rating = styled.div`
	display: flex;
	align-items: center;
	margin-top: 18px;

	svg {
		font-size: 18px;
		margin: 0 2px;
	}
`;
export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
export const HireMe = styled.button`
	background: #94449e;
	outline: none;
	border: none;
	color: #fff;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s ease;

	&:hover {
		background: #333;
	}
`;

export const StarIcon1 = styled(IoStar)`
	stroke: "ffffff";
	width: 30px;
	height: 30px;
	color: #94449e;

	&:hover {
		color: #94449e;
		opacity: 0.2;
	}
`;

export const StarIcon2 = styled(IoStar)`
	stroke: "#94449e";
	width: 30px;
	height: 30px;
	color: gray;
	opacity: 0.7;

	&:hover {
		color: #94449e;
		opacity: 0.9;
	}
`;
