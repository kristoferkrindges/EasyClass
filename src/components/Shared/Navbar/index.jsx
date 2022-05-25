import React from "react";
import { 
	Nav, 
	NavbarContainer, 
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
	NavBtn,
	NavBtnLink
} from "./style";
import {FaBars} from 'react-icons/fa'
import logo from "../../../imagens/logo.jpeg";

export default function Navbar({toggle, resp}) {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<img className="logo" src={logo}></img>
						<h1>EasyClass</h1>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars></FaBars>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/about">Sobre</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/profile">Perfil</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">{resp}</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
}
