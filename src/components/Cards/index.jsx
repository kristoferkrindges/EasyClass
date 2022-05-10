import React from "react";
import {Container, StarIcon} from "./styles"


export default function Cards({img, stars, name, lastName, subject, price, id}){
    const star = Array.from({length: stars}, (v,k) => k+1)
    return(
        <li>
            <Container>
                <div>
                    <img className="logo" src={img}></img>
                    {/* {stars?.star.forEach(stars => {
                        <StarIcon></StarIcon>
                    })} */}
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                </div>
                <div>
                    <h2>{`${name} ${lastName}`}</h2>
                    <hr></hr>
                    <ul>
                        <li>{subject}</li>
                    </ul>
                    <h2>{price}</h2>
                </div>
            </Container>
        </li>
    )
}