import React, {useState} from "react";

import {
    Container,
    Card,
    CardContent,
    Row,
    Digit,
    InfoContainer,
    Title,
    SubTitle,
    Badge,

} from "./style"

function Info(props) {
	return (
		<Container>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>{props.digit1}</Digit>
                        <InfoContainer>
                        <Title>{props.info1}</Title>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>{props.digit2}</Digit>
                        <InfoContainer>
                        <Title>{props.info2}</Title>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            {/* <Card>
                <CardContent>
                    <Row>
                        <Digit>22</Digit>
                        <InfoContainer>
                        <Title>Exercicios</Title>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>56</Digit>
                        <InfoContainer>
                        <Title>Questões</Title>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card> */}
		</Container>
	);
}

export default Info;
