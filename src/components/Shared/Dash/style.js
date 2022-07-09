import styled from "styled-components";

export const Container = styled.div`
	/* display: flex; */
	height: 100%;
	/* width: 100%; */
	background: #4f4f4f;
`;

export const Content = styled.section`
	position: relative;
	width: calc(100% - 250px);
	/* left: 299px; */
	left: 250px;
	transition: all 0.3s ease;

	@media only screen and (max-width: 768px) {
		width: calc(100% - 2px);
		left: 2px;
	}
	@media only screen and (max-width: 580px) {
		/* width: calc(100%); */
		/* left: 2px; */
		/* width: 67vh; */
	}
`;
