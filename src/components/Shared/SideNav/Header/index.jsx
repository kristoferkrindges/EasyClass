import React from "react";
import {Container} from "./style"
import {FaBars} from 'react-icons/fa'

function Header() {
	return (
		<Container>
            <label htmlFor="check">
                <FaBars className="sidebar_btn"></FaBars>
            </label>
            <div className="left">
                <h3>Easy<span>Class</span></h3>
            </div>
            <div className="right">
                <button>Sair</button>
            </div>
        </Container>
	);
}

export default Header