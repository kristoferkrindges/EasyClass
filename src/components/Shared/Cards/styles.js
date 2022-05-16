import styled from "styled-components"
import {IoStar} from "react-icons/io5"

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    height: 250px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0 1px 6px black;
    cursor: pointer;

    transition: opacity 0.5s ease-out;

    &:hover{
        opacity: 0.5;
        background-color: #fff;
    }

    img{
    cursor: pointer;
    width: 150px;
    margin-right: auto;
    border: none;
    /* flex-wrap: nowrap; */

    }
    div{
        width: 100%;
        padding: 10px;
    }

    svg{
        height: 20px;
        width: 20px;
        color: #94449E;
    }
    svg:hover{
        color: purple;
        opacity: 0.2;
    }
`

export const StarIcon = styled(IoStar)`
    stroke: "ffffff";
    width: 15px;
    height: 15px;

`