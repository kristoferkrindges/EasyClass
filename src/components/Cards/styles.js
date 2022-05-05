import styled from "styled-components"
import {IoStar} from "react-icons/io5"

export const Container = styled.div`
    display:flex;
    flex-direction: wrap;
    justify-content: space-evenly;
    align-items: center;
    
    background-color: #ffffff;
    padding: 10px;
    height: 250px;
    width: 350px;
    
    border: none;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    &:hover{
        opacity: 0.9;
        background-color: purple;
    }

    img{
    cursor: pointer;
    width: 150px;
    margin-right: auto;
    border: none;
    border-radius: 10px;

    }
    div{
        width: 100%;
        padding: 10px;
    }

    svg{
        height: 20px;
        width: 20px;
        color: yellow;
    }
    svg:hover{
        color: purple;
        opacity: 0.5;
    }
`

export const StarIcon = styled(IoStar)`
    stroke: "ffffff";
    width: 15px;
    height: 15px;

`