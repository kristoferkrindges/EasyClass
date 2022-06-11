import styled from "styled-components"

export const Container = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
`

export const Text = styled.h1`
    color: white;
    span{
       font-weight: 800;
       font-size: 1.5rem;
       color: #94449e;
       margin-left: 20px; 
    }
`

export const InputContainer = styled.div`
    display:flex;

`

export const Icon = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: #94449e;
    display:flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    
    svg{
        color: white;
    }
`

export const Input = styled.input`
    border: none;
    background-color: white;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    text-align: center;
    color: black;
    font-size: 1.0rem;

    &:focus{
        border: none;
        outline: none;
    }
`