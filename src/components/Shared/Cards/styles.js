import styled from "styled-components";
import { IoStar } from "react-icons/io5";

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	/* padding: 10px; */
	height: 250px;
	width: 350px;
	border-radius: 20px;
	box-shadow: 0 1px 6px black;
	cursor: pointer;

	transition: opacity 0.5s ease-out;

	&:hover {
		opacity: 0.5;
		background-color: #fff;
		height: 280px;
		width: 380px;
	}

	img {
		cursor: pointer;
		width: 150px;
		margin-right: auto;
		border: none;
		border-radius: 90px;
		box-shadow: 0 1px 6px black;
		/* flex-wrap: nowrap; */
	}
	.cont1{
		display:flex;
		align-items: center;
		flex-direction: column;
		margin: 20px;
	}
	.cont1 .stars{
		margin-top: 10px;
	}
	.stars{
		display:flex;
		align-items: center;
		padding: 10px;
	}
	.cont2{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cont2 hr{
		width: 15vh;
	}
	.cont2 ul{
		padding: 10px 0px;
	}
	.cont2 ul li{
		list-style: inside;
		font-size: 20px;
	}

	.cont2 .price{
		display:flex;
		align-items: center;
		background: #94449e;
		padding: 30px 30px;
		width: 13vh;
		height: 9vh;
		border: none;
		border-radius: 30px;
		box-shadow: 0 1px 6px black;
	}
	.cont2 .price h2{
		font-size: 20px;
	}
`;

export const StarIcon1 = styled(IoStar)`
	stroke: "ffffff";
	width: 25px;
	height: 25px;
	color: #94449e;

	&:hover{
		color: #94449e;
		opacity: 0.2;
	}
`;

export const StarIcon2 = styled(IoStar)`
	stroke: "#94449e";
	width: 25px;
	height: 25px;
	color: gray;
	opacity: 0.7;

	&:hover{
		color: #94449e;
		opacity: 0.9;
	}
`;
