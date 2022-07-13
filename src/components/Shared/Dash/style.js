import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	background: #4f4f4f;
`;

export const Content = styled.section`
	position: relative;
	width: calc(100% - 250px);
	left: 250px;
	transition: all 0.3s ease;

	@media only screen and (max-width: 768px) {
		width: calc(100% - 2px);
		left: 2px;
	}
	@media only screen and (max-width: 580px) {
	}
`;
