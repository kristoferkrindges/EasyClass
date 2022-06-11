import React from "react";
import {Container, StarIcon1, StarIcon2} from "./styles"
export default function Cards({img, stars, name, lastName, subject, price, id, onClick}){
    const number = (5 - stars)
    const star = Array.from({length: stars}, (v,k) => k+1)
    const star2 = Array.from({length: number}, (v,k) => k+1)
    const eventClick = (event) => {
        event.stopPropagation();
        if(onClick)
        onClick(id);
    }
    return(
        <li onClick={eventClick}>
            <Container>
                <div className="cont1">
                    <img className="logo" src={img}></img>
                    <div className="stars">
                        {star.map((id,index)=>
                            <StarIcon1 key={index}></StarIcon1>
                        )}
                        {star2.map((id,index)=>
                            <StarIcon2 key={index}></StarIcon2>
                        )}
                    </div>
                    
                </div>
                <div className="cont2">
                    <h2>{`${name} ${lastName}`}</h2>
                    <hr></hr>
                    <ul>
                        <li>{subject}</li>
                    </ul>
                    <div className="price"><h2>{price}</h2></div>
                </div>
            </Container>
        </li>
    )
}