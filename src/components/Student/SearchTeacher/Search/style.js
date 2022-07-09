import styled, { keyframes } from "styled-components";
import { IoSearch } from "react-icons/io5";

export const Container = styled.div`
	/* width: 80%; */
	/* background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%); */
	/* background: red; */
	/* border-top-left-radius: 2rem;
	border-bottom-left-radius: 2rem;
	margin: 1rem 8rem 1rem 17rem; */
	width: 100%;
	padding: 24px 20px 20px 20px;
	z-index: 2;

	.swiper {
		padding: 32px;
		margin-top: 3%;
		margin-left: 3rem;
	}

	.swiper-slide {
		display: flex;
		justify-content: center;
	}

	.swiper-pagination-bullet-active {
		background-color: #94449e;
	}

	.swiper-button-prev {
		color: #94449e;
	}

	.swiper-button-next {
		color: #94449e;
	}
`;
export const Controller = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
`;

export const Phrase = styled.h2`
	color: white;
	font-size: 2rem;
`;
export const Searchs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 4rem;
`;
export const ContainerInput = styled.div`
	max-width: 400px;
	width: 100%;
	/* display: flex;
    align-items: center;
    justify-content: center; */
`;
export const Drop = styled.div`
	position: relative;
	height: 50px;
	max-width: 380px;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;

	.check:checked ~ & {
		max-width: 380px;
	}
`;

export const Input = styled.input`
	/* width: 100%;
    min-width: 38ch;
    max-width: 48ch;
    min-height: 5ch;
    max-height: 8ch;
    line-height: 1.1;
    background-color: white;
    border: 2px solid white;//var(--select-border)
    border-radius: 10px; */
	position: absolute;
	height: 100%;
	width: 100%;
	border-radius: 25px;
	background: #fff;
	outline: none;
	border: none;
	padding-left: 20px;
	font-size: 18px;
	color: black;
	transition: background-color 0.5s ease-in;

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;
export const IconSearch = styled(IoSearch)``;
export const Result = styled.div``;
export const Ul = styled.ul`
	position: fixed;
	margin-left: 20px;
	overflow: hidden;
`;
const rightLeft = keyframes`
    0%{
        left: 100%;
    }
    
    50%{
        left: 100%;
    }

    100%{
        left: 0;
    }
`;

export const Li = styled.li`
	font-size: 1.4rem;
	font-weight: bold;
	line-height: 2.5rem;
	color: rgba(255, 255, 255, 0.5);
	list-style-type: "";
	list-style-position: inside;
	position: relative;
	left: 100%;
	animation: ${rightLeft} 0.5s ease-in;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;

	&:hover {
		cursor: pointer;
		color: rgba(255, 255, 255, 0.8);
		background-color: rgba(255, 255, 255, 0.05);
	}
`;

export const Span = styled.span`
	padding-left: 1ch;
`;

export const ContainerSelect = styled.div`
	position: relative;
	display: flex;
	width: 24em;
	height: 3em;
	line-height: 3;
	background: #fff;
	overflow: hidden;
	border-radius: 25px;
	/* ============================== */
	/* display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px; */
	/* border-radius: 25px; */
	/* max-width: 400px;
    width: 100%; */

	&::after {
		font-family: FontAwesome;
		font-weight: 900;
		content: "\f518";
		position: absolute;
		top: 0;
		right: 0;
		padding: 0 1.5em;
		background: #94449e;
		cursor: pointer;
		pointer-events: none;
		transition: 25s all ease;
		color: white;
	}

	&:hover::after {
		opacity: 0.5;
	}
`;
export const TextInput = styled.h3`
	/* margin-left: 7rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: #ffff; */
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background: #94449e;
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const TextSelect = styled.h3`
	margin-right: 1rem;
	font-size: 1.5rem;
	color: #ffff;
`;

export const Select = styled.select`
	/* width: 100%;
    min-width: 22ch;
    max-width: 30ch;
    border: 2px solid white;//var(--select-border)
    border-radius: 10px;
    padding: 0.25em 0.5em;
    margin-right: 3rem; */
	/* margin-top: 5%; */
	/* font-size: 1.25rem; */
	/* cursor: pointer;
    line-height: 1.1;
    background-color: white; */
	/* background-image: linear-gradient(to top, #f9f9f9, #fff 33%); */
	/* text-align-last: center; */
	/* ============================ */
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	appearance: none;
	outline: 0;
	box-shadow: none;
	border: 0 !important;
	background: #fff;
	background-image: none;
	flex: 1;
	padding: 0 0.5em;
	color: black;
	cursor: pointer;
	font-size: 1.2em;
	font-family: "Open Sans", sans-serif;

	&::-ms-expand {
		display: none;
	}
`;
export const Option = styled.option``;

export const ListCards = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	/* gap: 1%; */
	/* margin-left: 4rem; */
	/* flex-wrap: wrap; */
	margin-top: 6rem;
	/* justify-self: center; */
	/* max-width: 1500px; */
	/* padding: 20px; */
	/* height: 60%;
	width: 100%;
	gap: 3%;
	flex-wrap: wrap; */

	@media screen and (max-width: 798px) {
		margin-bottom: 220px;
	}
`;
