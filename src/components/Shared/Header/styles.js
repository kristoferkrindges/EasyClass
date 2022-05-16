import styled from "styled-components"

export const Container = styled.header`
    //Menu/Topbar
    width: 100vw;
    height: 60px;
    display: flex;
    padding: 1% 20%;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid;
    border-color: #7F8777;

    //Logo
    img{
    cursor: pointer;
    width: 40px;
    margin-right: 20%;
    border: none;
    border-radius: 5px;
    }

    //Menu items
    li, a, button{
    font-weight: 500;
    font-size: 16px;
    color: #3B393B;
    text-decoration: none;
    }

    .nav_links{
    list-style: none;
    cursor: pointer;
    }

    .nav_links li{
    display: inline-block;
    padding: 0px 20px;
    align-items: center;
    }

    .nav_links li a{
    transition: all 0.3s ease 0s;
    }

    .nav_links li a:hover{
    color: #94449E;
    }

    //Signin button
    button{
    padding: 10px 15px;
    background-color: #94449E;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: #fff;
    }
    
    //Hover effect signin button
    button:hover{
    background-color: #3B393B;
    }
`