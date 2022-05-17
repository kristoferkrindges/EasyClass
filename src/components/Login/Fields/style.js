import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	justify-self: center;
	flex-direction: column;
	max-width: 1200px;
	padding: 15%;
	height: 80%;
	width: 100%;
	background-color: #e8e8e8;
	box-shadow: 0 1px 6px black;
	border-radius: 6px;
	margin-top: 3%;
	color: black;
	margin-bottom: 3%;

	input {
		border-radius: 6px;
		padding: 2%;
		margin: 2% 0;
		width: 100%;
		font-size: 18px;
	}

	.form > h2 {
		text-align: center;
		margin-bottom: 10%;
	}

	.form > h3 {
		text-align: center;
		margin-bottom: 2%;
	}

	.form > p {
		cursor: pointer;
		text-align: center;
	}

	.form > button {
		border-radius: 6px;
		border-color: white;
		font-size: 18px;
		width: 100%;
		padding: 2%;
		margin: 2% 0;
		background-color: #94449e;
		color: white;
		cursor: pointer;
	}
`;
