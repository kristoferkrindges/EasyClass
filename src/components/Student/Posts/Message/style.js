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
export const Container = styled.div`
	/* display: flex; */
	height: 100vh;
	/* width: 100%; */
	background: #4f4f4f;

	/* @media (max-width: 768px) {
		width: 50vh;
	} */
`;

export const Context = styled.div`
	background-color: none;
	display: flex;
	justify-content: center;
	height: 100vh;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: auto;
	}
`;
export const Card = styled.div`
	background-color: none;
	border-radius: 1rem;
	/* box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2); */
	display: flex;
	margin: 1.5rem;
	overflow: hidden;
	width: 30rem;
	height: 19rem;

	h2 {
		letter-spacing: 0.1rem;
		margin: 1rem 0;
		color: var(black-text);
	}

	h6 {
		opacity: 0.6;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
	}
`;
export const Left = styled.div`
	/* background-color: red; */
	color: var(--white-text);
	padding: 2rem;
	max-width: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	&:hover {
		opacity: 0.5;
	}

	h2 {
		color: var(--white-text);
	}

	img {
		width: 120px;
		height: 120px;
		border-radius: 25px;
	}
`;
export const Right = styled.div`
	padding: 30px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	background-color: white;
	/* display: none; */

	p {
		font-size: 0.9rem;
		color: var(--black-text);
	}

	button {
		/* border-radius: 3rem;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
		color: var(--white-text);
		font-size: 1.2rem;
		padding: 0.8rem 1.5rem;
		letter-spacing: 0.1rem;
		align-self: flex-end; */
	}
`;
export const Div = styled.div``;

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
