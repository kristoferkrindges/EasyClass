import React from "react";
import {
    Container,
    CardContent,
    Chart,
    EarningsText,

} from "./style";

function Tags(props){
    return(
        <Container>
            <CardContent>
                <Chart>
                    {props.icon}
                </Chart>
                <EarningsText>{props.value}</EarningsText>
            </CardContent>
        </Container>
    )
}

export default Tags