import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	width: 100%;
	height: 280vh;
	background: #e8e8e8;
	display: flex;
	justify-content: center;
	align-items: center;
	
	.content{
		position: relative;
		max-width: 900px;
		text-align: center;
	}

	.content p{
		font-size: 1.5rem;
	}

	&:before{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 130px;
		background: #3b393b;
		clip-path: polygon(100% 0,0 100%,100% 100%)
	}

	p {
		font-weight: 700;
		font-size: 30px;
		color: #3b393b;
	}
`;
