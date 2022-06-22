import React from "react";
// import Badge from "./Badge";
import AvatarImage from "../../../../assets/logo.jpeg";
import {
    Container,
    CardContent,
    Invoice,
    Info,
    Avatar,
    TextContainer,
    Title,
    SubTitle,
    InvoicesContainer,
    Price,
    Pay,
    NoPay,

} from "./style"

function Invoices() {
  return (
    <Container>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Trevor Mallon</Title>
              <SubTitle>Historia</SubTitle>
            </TextContainer>
          </Info>
          <InvoicesContainer>
            <Pay>Pago</Pay>
            {/* <Badge content="Paid" paid /> */}
            <Price>R$ 100,00</Price>
          </InvoicesContainer>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Ash Parker</Title>
              <SubTitle>Programming</SubTitle>
            </TextContainer>
          </Info>
          <InvoicesContainer>
            <NoPay>Não</NoPay>
            {/* <Badge content="Late" late /> */}
            <Price>R$ 100,00</Price>
          </InvoicesContainer>
        </Invoice>
      </CardContent>
    </Container>
  );
}

export default Invoices;