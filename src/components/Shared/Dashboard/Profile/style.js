import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  height: 174%;
  padding: 1rem;
  background-color: #3b393b;
  width: 27.5vw;
  box-shadow: red;
  transition: 0.4s ease-in-out;
  /* border: 8px solid purple; */
  &:hover {
    box-shadow: red;
    opacity: 0.8;
  }

  &::before{
        content: "";
        position: absolute;
        height: 20%;
        width: 25.5%;
        background: #94449e;
        border-radius: 20px 20px 0 0;
    }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  z-index: 100;
`;
export const NameProfession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  color: #333;
`;

export const Image = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  padding: 3px;
  background: #94449e;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #fff;
  }
`;

export const Name = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  /* background-color: rgba(146, 166, 255, 0.3); */
  border-radius: 10px;
`;

export const Old = styled.span`
  font-size: 1.0rem;
  font-weight: 600;
  color: white;
  /* background-color: rgba(146, 166, 255, 0.3); */
  border-radius: 10px;
`;
// ====================================================

