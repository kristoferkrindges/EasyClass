import styled from "styled-components"


export const Container = styled.div`
    width: 80%;
    background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin: 1rem 8rem 1rem 17rem;
`
export const Controller = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

`

export const Phrase = styled.h2`
    color: white;
    font-size: 2rem;

`
export const Searchs = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
`
export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Input = styled.input`
    width: 100%;
    min-width: 38ch;
    max-width: 48ch;
    min-height: 5ch;
    max-height: 8ch;
    line-height: 1.1;
    background-color: white;
    border: 2px solid white;//var(--select-border)
    border-radius: 10px;
`

export const ContainerSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
`
export const TextInput = styled.h3`
    margin-left: 7rem;
    margin-right: 1rem;
    font-size: 1.5rem;
`

export const TextSelect = styled.h3`
    margin-right: 1rem;
    font-size: 1.5rem;
`

export const Select = styled.select`
    width: 100%;
    min-width: 22ch;
    max-width: 30ch;
    border: 2px solid white;//var(--select-border)
    border-radius: 10px;
    padding: 0.25em 0.5em;
    margin-right: 3rem;
    /* margin-top: 5%; */
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: white;
    /* background-image: linear-gradient(to top, #f9f9f9, #fff 33%); */
    text-align-last: center;
`
export const Option = styled.option`
    
`

export const ListCards = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
    gap: 1%;
    margin-left: 4rem;
    flex-wrap: wrap;
    margin-top: 6rem;
	/* justify-self: center; */
	/* max-width: 1500px; */
	/* padding: 20px; */
	/* height: 60%;
	width: 100%;
	gap: 3%;
	flex-wrap: wrap; */

	@media screen and (max-width: 798px){
		margin-bottom: 220px;
	}

    
`;