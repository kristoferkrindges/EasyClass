import styled from "styled-components";

export const Container = styled.div`
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: center;
		flex-direction: column;
		max-width: 600px;
		padding: 15%;
		background-color: #e8e8e8;
		box-shadow: 0 1px 6px black;
		border-radius: 6px;
		margin-top: 10%;
		color: black;
	}

	input {
		border-radius: 6px;
		padding: 2%;
		margin: 2% 0;
		width: 100%;
		font-size: 18px;
	}

	.form h2 {
		text-align: center;
		margin-bottom: 5%;
	}

	.form h3 {
		text-align: center;
		margin-bottom: 2%;
	}

	.form p {
		cursor: pointer;
		text-align: center;
		font-weight: 700;
	}

	.form button {
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
