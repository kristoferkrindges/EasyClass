import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
	IoCloseOutline,
} from "react-icons/io5";

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
	margin-left: 40%;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoCamera = styled(IoCameraOutline)`
	width: 20px;
	height: 20px;
	stroke: white;

	&:hover {
		opacity: 0.5;
	}
`;

export const Container = styled.div`
	height: 100vh;
	background: #4f4f4f;
`;

export const Context = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 91.8vh;
`;

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80vh;
	margin-left: 15%;
	margin-top: 1%;
	border-radius: 25px;
	background: #fff;
`;

export const Top = styled.div`
	background: #94449e;
	border-radius: 20px;
	margin: 0px 0;
	height: 40vh;
	width: 100vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
`;

export const Image = styled.div`
	height: 220px;
	width: 220px;
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
`;

export const InputImage = styled.input`
	display: none;
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.title};
	cursor: pointer;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	&svg {
		margin-left: 5%;
	}
`;

export const Social = styled.div`
	position: absolute;
	top: 15px;
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
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	color: white;
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;
export const Subject = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
`;

export const HireMe = styled.button`
	background: #333;
	outline: none;
	border: 1px solid #94449e;
	color: white;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
		opacity: 0.5;
	}
`;

export const Bottom = styled.div`
	height: 40vh;
	width: 100vh;
	background-color: #fff;
	padding: 25px 30px;
	border-radius: 25px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.div`
	font-size: 25px;
	font-weight: 500;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 3px;
		width: 30px;
		border-radius: 5px;
		background: linear-gradient(135deg, #71b7e6, #9b59b6);
	}
`;

export const Collection = styled.div``;

export const UserDetails = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 20px 0 12px 0;

	span {
		display: block;
		font-weight: 500;
		margin-bottom: 5px;
	}

	input {
		margin-bottom: 15px;
		width: calc(100% / 2 - 20px);
	}
`;

export const InputBox = styled.div`
	& input {
		height: 45px;
		width: 400px;
		outline: none;
		font-size: 16px;
		border-radius: 5px;
		padding-left: 15px;
		border: 1px solid #ccc;
		border-bottom-width: 2px;
		transition: all 0.3s ease;
	}

	h3 {
		height: 45px;
		width: 400px;
		outline: none;
		font-size: 1.5rem;
		border-radius: 5px;
		padding-left: 15px;
		transition: all 0.3s ease;
	}

	input:focus {
		border-color: #9b59b6;
	}

	input:valid {
		border-color: #9b59b6;
	}
`;

export const ButtonResult = styled.div`
	height: 45px;
	margin: 45px 0;

	input {
		height: 100%;
		width: 100%;
		border-radius: 5px;
		border: none;
		color: #fff;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.3s ease;
		background: linear-gradient(135deg, #71b7e6, #9b59b6);
	}

	input {
		:hover {
			background: linear-gradient(-135deg, #71b7e6, #9b59b6);
		}
	}
`;
