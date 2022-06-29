import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
	IoCloseOutline,
} from "react-icons/io5";

export const IoCamera = styled(IoCameraOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoClose = styled(IoCloseOutline)`
	width: 20px;
	height: 20px;
	stroke: black;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPencil = styled(IoPencilOutline)`
	width: 15px;
	height: 15px;
	stroke: black;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.title};
	/* background-color: #4070f4;
	height: 50px;
	width: 10vh; */
	/* text-align: center; */
	/* border: 1px solid var(--select-border);
	border-radius: 25px; */
	/* padding: 0.25em 0.5em;
	font-size: 1.5rem; */
	cursor: pointer;
	/* line-height: 1.1; */
	margin: 0;
	/* position: absolute; */
	display: flex;
	justify-content: center;
	align-items: center;
	/* margin-bottom: 8%; */
	margin-top: 4%;

	&svg {
		margin-left: 5%;
	}
`;

export const InputImage = styled.input`
	display: none;
`;

export const Container = styled.div`
	/* display: flex; */
	height: 100vh;
	/* width: 100%; */
	background: #4f4f4f;
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 65%;
	height: 70%;
	display: flex;
	box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
	margin-left: 7%;
	border: 1px solid black;
	/* border-radius: 25px; */
`;
export const Infow = styled.div``;

export const Left = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	width: 35%;
	background: #94449e;
	padding: 30px 5px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	text-align: center;
	color: #fff;

	img {
		width: 230px;
		height: 230px;
		border-radius: 15px;
		margin-top: 30%;
		border: 1px solid white;
	}

	img:hover {
		/* opacity: 0.6; */
	}

	h4 {
		margin-top: 15%;
		font-size: 2rem;
	}

	p {
		font-size: 1.3rem;
	}
`;

export const Controller = styled.div`
	width: 100%;
	position: relative;

	label {
		position: absolute;
		bottom: 5px;
		left: 0;
		color: rgb(150, 150, 150);
		cursor: text;
		transition: 0.5s ease-in-out;
	}

	.close {
		position: absolute;
		top: 25px;
		left: 340px;
		color: rgb(150, 150, 150);
		transition: 0.5s ease-in-out;
	}

	input {
		width: 100%;
		padding: 5px;
		border: 0;
		border-bottom: 2px solid rgb(200, 200, 200);
		outline: 0;
		font-size: 16px;
		color: rgb(80, 80, 80);
		transition: 0.5s ease-in-out;
		margin-top: 3%;
	}

	input:focus,
	input:valid {
		border-bottom: 2px solid #94449e;
	}

	input:focus ~ label,
	input:valid ~ label {
		transform: translateY(-24px);
		font-size: 12px;
		color: #94449e;
	}
`;

export const Right = styled.div`
	width: 65%;
	background: #fff;
	padding: 30px 25px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;

	.title {
		text-align: center;
	}
`;

export const Info = styled.div`
	margin-top: 19%;
	margin-bottom: 27px;

	h3 {
		margin-bottom: 15px;
		padding-bottom: 5px;
		border-bottom: 1px solid #e0e0e0;
		font-size: 2rem;
		color: #353c4e;
		text-transform: uppercase;
		letter-spacing: 5px;
	}
`;

export const InfoData = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Data = styled.div`
	width: 45%;

	& h4 {
		color: #353c4e;
		margin-bottom: 5px;
		font-size: 1.5rem;
	}
	p {
		font-size: 13px;
		margin-bottom: 10px;
		color: #919aa3;
		font-size: 1.2rem;
	}
`;

export const Projects = styled.div`
	margin-bottom: 25px;

	h3 {
		margin-bottom: 15px;
		padding-bottom: 5px;
		border-bottom: 1px solid #e0e0e0;
		color: #353c4e;
		text-transform: uppercase;
		letter-spacing: 5px;
	}
`;
export const ProjectsData = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const DataTwo = styled.div`
	width: 45%;

	& h4 {
		color: #353c4e;
		margin-bottom: 5px;
		font-size: 1.5rem;
	}
	p {
		font-size: 13px;
		margin-bottom: 10px;
		color: #919aa3;
		font-size: 1.2rem;
	}
`;

export const SocialMedia = styled.div`
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 17%;
	}

	li {
		width: 45px;
		height: 45px;
		background: #94449e;
		margin-right: 45px;
		border-radius: 5px;
		text-align: center;
		line-height: 45px;
	}

	a {
		color: #fff;
		display: block;
		font-size: 18px;
	}
`;
