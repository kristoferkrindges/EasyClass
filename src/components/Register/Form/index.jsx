import React from "react";
import {Container} from "./style";
import Fields from "../Fields"

export default function Form(){
    return(
        <Container>
            <h2>Cadastre-se</h2>
            <form>
                <Fields></Fields>
            </form>
        </Container>
    )
}