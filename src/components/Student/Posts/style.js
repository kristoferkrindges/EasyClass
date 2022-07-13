import styled from "styled-components";
import { IoCameraOutline } from "react-icons/io5";

export const IoCamera = styled(IoCameraOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;
export const Container = styled.div`
	height: 100%;
	background: #4f4f4f;
`;

export const Context = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	margin-left: 13%;
	gap: 0%;
	flex-wrap: wrap;

	@media (max-width: 1030px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: auto;
		margin-left: 0;
	}
`;
