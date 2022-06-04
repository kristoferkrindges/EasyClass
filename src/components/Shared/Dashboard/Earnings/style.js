import styled from "styled-components";
import { IoStar, } from "react-icons/io5";

export const Container = styled.div`
  height: 15rem;
  width: 14rem;
  background-color: #94449e;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: #94449e;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;


export const CardContent = styled.div`
  margin: 1rem;
`;

export const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

export const Earning = styled.h2`
  text-align: center;
`;

export const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    margin-top: 18px;
    
    svg{
        font-size: 18px;
        margin: 0 2px;
        
    }
`

export const StarIcon1 = styled(IoStar)`
	stroke: "ffffff";
	width: 30px;
	height: 30px;
	color: white;

	&:hover{
		color: white;
		opacity: 0.2;
	}
`;

export const StarIcon2 = styled(IoStar)`
	stroke: "#94449e";
	width: 30px;
	height: 30px;
	color: gray;
	opacity: 0.7;

	&:hover{
		color: #94449e;
		opacity: 0.9;
	}
`;