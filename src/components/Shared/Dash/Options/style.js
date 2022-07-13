import styled from "styled-components";

export const Layout = styled.main`
	width: 100%;
	padding: 24px 20px 20px 20px;
	z-index: 2;
`;

export const Title = styled.h1`
	font-size: 28px;
	font-weight: 600;
	margin-bottom: 10px;
	color: #94449e;

	span {
		color: white;
		margin-left: 0.5%;
	}
`;

export const BreadCrumbs = styled.ul`
	display: flex;
	grid-gap: 6px;

	li {
		font-size: 14px;
	}

	li a {
		font-size: 14px;
		color: #94449e;
	}
	li a .active {
		color: white;
	}

	li .divider {
		color: white;
	}
`;

export const InfoData = styled.div`
	margin-top: 36px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 20px;

	a {
		color: white;
	}
	a:hover {
		opacity: 0.5;
	}
`;

export const Data = styled.div`
	display: flex;
	grid-gap: 20px;
	margin-top: 20px;
	flex-wrap: wrap;
`;

export const ContentData = styled.div`
	flex-grow: 1;
	flex-basis: 400px;
	padding: 20px;
	background-color: #3b393b;
	border-radius: 10px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const Call = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const Info = styled.div`
	margin-top: 1.5%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: #3b393b;
`;

export const Itter = styled.div`
	display: flex;
	justify-content: space-around;
	justify-content: center;
	gap: 0%;

	@media (max-width: 1030px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: auto;
		margin-left: 0;
	}
`;
