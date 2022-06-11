import React from "react";
import {
    Container,
    Text,
    InputContainer,
    Icon,
    Input

} from "./style";
import {FiSearch} from "react-icons/fi"

function Navbar(props){
    return(
        <Container>
            <Text>
                Bem-vindo!
                <span>{props.name}</span>
            </Text>
            <InputContainer>
                <Icon>
                    <FiSearch></FiSearch>
                </Icon>
                <Input type="text" placeholder="O que você deseja?"></Input>
            </InputContainer>
        </Container>
    )
}

export default Navbar