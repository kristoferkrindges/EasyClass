import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    background: #94449e;
    padding: 20px;
    width: 100%;
    height: 50px;

    label .sidebar_btn{
        z-index: 1;
        position: fixed;
        left: 150px;
        color: #fff;
        font-size: 20px;
        /* margin-bottom: 10px; */
        cursor: pointer;
        transition: 0.5s;
        transition-property:color ;
    }

    label .sidebar_btn:hover{
        color: black;
    }


    .left h3{
        color: #fff;
        margin: 0;
        text-transform: uppercase;
        font-size: 1.0rem;
        font-weight: 800;
    }

    .left span{
        color: black;
    }
    .right button{
        padding: 5px;
        background: white;
        float: right;
        margin-top: -30px;
        margin-right: 40px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 500;
        border: none;
        transition: 0.5s;
        transition-property: background;
    }
    .right button:hover{
        background: black;
        color: white;
    }
`