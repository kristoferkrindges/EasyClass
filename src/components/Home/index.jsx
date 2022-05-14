import React from "react";
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Article from "./Article"
import Section from "./Section"
import { Container } from "./styles";

export default function Home(){
    return(
            <Container>
                <Header></Header>
                <Article></Article>
                <Section></Section>
                <Footer></Footer>
            </Container>
    )
}