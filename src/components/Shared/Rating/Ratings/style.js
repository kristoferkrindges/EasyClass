import styled from "styled-components";
import { IoStar, IoCloseCircleOutline } from "react-icons/io5";

export const Container = styled.div`
	background: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 500;
	top: 0px;
	right: 0px;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	/* background-color: #3b393b;
	justify-content: center;
	margin-top: 10%;
	width: 500px; */
	position: fixed;
	z-index: 500;
	top: 0px;
	right: 550px;
`;

export const Layout = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 5%;
	background-color: #3b393b;
	width: 600px;
	height: 670px;
	border-radius: 25px;
	border: 2px solid #94449e;
`;

export const CardContent = styled.div``;

export const Title = styled.h2`
	font-size: 2rem;
	margin: 3% 0;
	color: white;
`;

export const Logo = styled.div`
	display: flex;
	width: 200px;
	height: 200px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	img:hover {
		opacity: 0.5;
	}
`;

export const Name = styled.h3`
	font-size: 1.5rem;
	margin: 2% 0;
	color: white;
`;

export const Stars = styled.div`
	margin: 1% 0 3% 0;
`;

export const IoClose = styled(IoCloseCircleOutline)`
	width: 30px;
	height: 30px;
	cursor: pointer;
	color: white;
	stroke: white;
	position: absolute;
	top: 110px;
	right: -50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover {
		color: #94449e;
		opacity: 0.2;
	}
`;

export const StarIcon = styled(IoStar)`
	width: 50px;
	height: 50px;
	cursor: pointer;
	margin-right: 10;
	&:hover {
		color: #94449e;
		opacity: 0.2;
	}
`;

export const Text = styled.div`
	width: 470px;
	background: #94449e;
	border-radius: 25px;
	padding: 25px 25px 30px;
	box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.06);
	border: 1px solid black;

	h3 {
		color: white;
		font-size: 28px;
		text-align: center;
	}

	textarea {
		width: 100%;
		resize: none;
		height: 59px;
		outline: none;
		padding: 15px;
		font-size: 16px;
		margin-top: 20px;
		border-radius: 5px;
		max-height: 330px;
		caret-color: #4671ea;
		border: 1px solid #3b393b;
	}

	textarea::placeholder {
		color: black;
	}
	textarea:is(:focus, :valid) {
		padding: 14px;
		border: 2px solid black;
	}
	textarea::-webkit-scrollbar {
		width: 0px;
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
