import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    width: 360px;
    background-color: #94449e;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0.4s ease-in-out;

    &:hover{
        /* box-shadow: black; */
        opacity: 0.8;
        width: 24rem;
    }
`

export const CardContent = styled.div`
    margin: 1rem;
`

export const Chart = styled.div`
    display: flex;
    justify-content: center;
    
    svg{
        height: 4rem;
        width: 4rem;
    }
    
`

export const EarningsText = styled.h3`
    text-align: center;
    font-weight: normal;
    padding: 0.4rem 0;
`

export const Earning = styled.h2`
    text-align: center;

`

export const EarningsIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
`