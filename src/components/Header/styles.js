import styled from "styled-components"

export const Container = styled.header`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 10%;
    background-color: #E8E8E8;

    img{
    cursor: pointer;
    width: 45px;
    margin-right: auto;
    border: none;
    border-radius: 10px;

    }

    li, a, button{
    font-family: sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3B393B;
    text-decoration: none;

    }
    .nav_links{
    list-style: none;

    }

    .nav_links li{
    display: inline-block;
    padding: 0px 20px;
    }

    .nav_links li a{
    transition: all 0.3s ease 0s;
    }

    .nav_links li a:hover{
    color: #94449E;
    }

    button{
    margin-left: 40px;
    padding: 9px 25px;
    background-color: #94449E;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: white;
    }

    button:hover{
    background-color: #3B393B;
    color: #94449E
    }
`