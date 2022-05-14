import React from "react";
import Article from "../Article";
import Section from "../Section";
import { Container } from "./styles";

export default function Layout(){
    return(
            <Container>
                <Article></Article>
                <Section></Section>
            </Container>
    )
}