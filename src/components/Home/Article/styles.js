import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	width: 100%;
	height: 31vh;
	background: #e8e8e8;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: 1px solid #3b393b; */

	.content {
		position: relative;
		max-width: 900px;
		text-align: center;
	}

	.content p {
		font-size: 1.5rem;
	}
	.content span {
		font-size: 1.8rem;
		color: #94449e;
	}

	&:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 14vh;
		background: #3b393b;
		clip-path: polygon(100% 0, 0 100%, 100% 100%);
	}

	@media screen and (max-width: 798px) {
		&:before {
			height: 12vh;
		}
		.content p {
			font-size: 1rem;
		}
	}

	p {
		font-weight: 700;
		font-size: 30px;
		color: #3b393b;
	}
`;
