import styled from "styled-components";
import { IoCalendarClear, IoColorWandSharp, IoMail, IoSearchSharp } from "react-icons/io5";

export const Container = styled.div`
    position: fixed;
    width: 250px;
    height: 100%;
    margin-top: 50px;
    padding-top: 30px;
    left: 0;
    background-color: rgba(148,68,158,0.7);

    .print{
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
    h2{
        color: black;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }
    h3{
        color: black;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.0rem;
    }

    a{
        color: black;
        display: block;
        width: 100%;
        line-height: 60px;
        text-decoration: none;
        padding-left: 40px;
        box-sizing: border-box;
        transition: 0.5s;
        transition-property:background ;
    }
    a:hover{
        background-color: rgba(148,68,158,0.7);
    }
    svg{
        padding-right: 10px;
        width: 20px;
	    height: 20px;
    }

`


export const Calendar = styled(IoCalendarClear)`
	/* stroke: "ffffff";
	width: 25px;
	height: 25px;
	color: #94449e; */

	/* &:hover{
		color: #94449e;
		opacity: 0.2;
	} */
`;

export const Edit = styled(IoColorWandSharp)`

`;

export const Msg = styled(IoMail)`

`
export const Search = styled(IoSearchSharp)`

`