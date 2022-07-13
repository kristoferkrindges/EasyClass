import styled from "styled-components";
import {
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
