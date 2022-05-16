import React from "react";
import {Container} from "./style";
import Fields from "../Fields"

export default function Form(){
    return(
        <Container>
            <form>
                <Fields></Fields>
            </form>
        </Container>
    )
}