import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #3B393B;

    .seletor{
        display: inline-block;
        padding: 20px;
    }
`

export const ListCards = styled.ul`
    display: flex;
    justify-content: center;
    justify-self: center;
    max-width: 1000px;
    padding: 20px;
    flex-wrap: wrap;
    gap: 10px;
`