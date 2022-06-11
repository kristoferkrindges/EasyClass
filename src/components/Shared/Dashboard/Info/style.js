import styled from "styled-components"

export const Container = styled.div`
  height: 15rem;
  width: 13rem;
  background-color: #3b393b;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: purple; //
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: purple; //
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  background-color: rgba(148, 68, 158, 0.9);
  border-radius: 1rem;
  margin-bottom: 1rem;
  height: 9vh;
`;

export const CardContent = styled.div`
  padding: 0.7rem 0.5rem 0.3rem 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`;

export const Digit = styled.div`
  background-color: #3b393b;
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  color: white;
`;

export const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;

export const Title = styled.h3`
  color: white;
`;

export const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;