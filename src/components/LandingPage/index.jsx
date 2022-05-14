import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Article from "./Article"
import Section from "./Section"
import { Container } from "./styles";

export default function LandingPage(){
    return(
        <Container>
            <Header></Header>
            <Article></Article>
            <Section></Section>
            <Footer></Footer>
        </Container>
    )
}