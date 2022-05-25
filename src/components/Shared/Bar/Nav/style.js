import styled from "styled-components";

export const Container = styled.div`


    .navbar{
        background-color: #3b393b;
        height: 80px;
        display:flex;
        justify-content: space-between;
        align-items: center;

    }
    .fresh{
        display:flex;
        align-items: center
    }
    .navbar h1{
        color: #f5f5f5;
        margin-left: 10px;
        font-size: 1.8rem;
        background: none;
        text-transform: uppercase;
        font-weight: 800;
        
    }
    @media screen and (max-width: 768px){
        .navbar h1{
            display: none;
        }
    }
    .navbar span{
        margin: 0;
        color:#94449e;
    }

    .navbar button{
        border-radius: 50px;
        background: #94449e;
        white-space: nowrap;
        padding: 10px 22px;
        /* margin-left: 1500px; */
        color: white;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        margin-right: 20px;
    }

    .navbar button:hover{
        transition: all 0.2s ease-in-out;
        background: #f5f5f5;
        color: purple;
        font-size: 20px;
    }

    .menu-bars{
        margin-top: 7px;
        margin-left: 15px;
        font-size: 2rem;
        background: none;

    }

    .menu-bars:hover{
        stroke: #94449e;
    }

    .nav-menu{
        background-color: #3b393b;
        width: 250px;
        height: 100vh;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -100%;
        transition: 850ms;
    }

    .nav-menu.active{
        left: 0;
        transition: 350ms;
    }

    .img-profle{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 12px 16px;
        margin-left: 4vh;
        margin-top: 10vh;
        margin-bottom: 5vh;
        height: 60px;
    }

    .img-p{
        display:flex;
        align-items: center;
        cursor: pointer;
		width: 140px;
		border: none;
		border-radius: 90px;
		box-shadow: 0 1px 6px black;
    }
    .img-p:hover{
        width: 150px;
    }

    .user{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 8px 10px 8px 16px;
        margin-bottom: 10px;
        height: 60px;
    }

    .user h1{
        color: #f5f5f5;
        font-size: 1.5rem;
        margin-bottom: 8px;
        /* width: 95%;
        height: 100%;
        display: flex; */
        /* align-items: center; */
        /* padding: 0 16px; */
        /* border-radius: 4px; */

    }
    .user h2{
        color: #f5f5f5;
        font-size: 1.0rem;
    }
    hr{
        margin-bottom: 3vh;
    }

    .nav-text{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 16px;
        height: 60px;
    }

    .nav-text a{
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;

    }

    .nav-text a:hover{
        background-color: #94449e
    }

    .nav-menu-items{
        width: 100%;
    }
    .nav-toggle{
        background-color: #94449e;
        width: 100%;
        height: 80px;
        display:flex;
        justify-content: start;
        align-items: center;
    }

    span{
        margin-left: 16px;
    }
`;