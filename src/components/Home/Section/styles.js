import styled from "styled-components";
import { IoArrowDownOutline, IoBookOutline } from "react-icons/io5";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #3b393b;
	/* border: 1px solid #3b393b; */

	h3 {
		color: #fff;
		font-weight: 400;
		font-size: 2rem;
	}

	.seletor {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		padding: 2%;
		text-align: center;
		white-space: nowrap;
	}

	.seletor h3 {
		font-size: 1.5rem;
		margin-right: 20px;
		text-align: center;
	}

	p {
		color: #fff;
		font-size: 2rem;
		font-weight: 400;
		margin: 8vh;
	}

	select {
		width: 100%;
		min-width: 22ch;
		max-width: 30ch;
		border: 1px solid var(--select-border);
		border-radius: 0.25em;
		padding: 0.25em 0.5em;
		/* margin-top: 5%; */
		font-size: 1.25rem;
		cursor: pointer;
		line-height: 1.1;
		background-color: #fff;
		background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
		text-align-last: center;
	}

	@media screen and (max-width: 798px) {
		.seletor {
			flex-direction: column;
			padding: 5%;
		}

		p {
			font-size: 1.3rem;
			margin-bottom: 50px;
			white-space: nowrap;
		}

		h3 {
			font-size: 1rem;
			padding: 5px;
		}
		.seletor select {
			min-width: 20ch;
			max-width: 20ch;
			font-size: 1rem;
		}
	}
`;

export const ListCards = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	/* justify-self: center; */
	max-width: 1800px;
	/* padding: 20px; */
	height: 60%;
	width: 100%;
	gap: 5%;
	flex-wrap: wrap;

	@media screen and (max-width: 798px) {
		margin-bottom: 220px;
	}
`;

export const ContentCarrousel = styled.div`
	width: 80%;

	@media screen and (max-width: 798px) {
		width: 92%;
	}
`;

export const IoArrowDown = styled(IoArrowDownOutline)`
	stroke: black;
	font-size: 1.5rem;
	transition: 0.3s;
`;

export const IoBook = styled(IoBookOutline)`
	/* stroke: black;
    font-size: 1.5rem;
    transition: 0.3s; */
`;

// Select Dinamic
export const SelectMenu = styled.div`
	/* width: 380px; */
	/* margin: 140px auto; */
`;

export const SelectBtn = styled.div`
	display: flex;
	min-width: 20ch;
	max-width: 20ch;
	font-size: 1rem;
	background: #fff;
	padding: 20px;
	font-weight: 400;
	border-radius: 8px;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	border: 1px solid black;
`;

export const BtnText = styled.span`
	color: black;
`;
export const Options = styled.ul`
	position: relative;
	padding: 20px;
	margin-top: 10px;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	z-index: 15;
	/* display: none; */
`;
export const Option = styled.li`
	display: flex;
	height: 55px;
	cursor: pointer;
	padding: 0 16px;
	border-radius: 8px;
	align-items: center;
	background: #fff;

	&:hover {
		background: #f2f2f2;
	}
`;

export const OptionText = styled.span`
	font-size: 18px;
	color: black;
`;
