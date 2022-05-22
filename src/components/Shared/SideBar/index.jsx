import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./style"

export default function Sidebar({isOpen, toggle}) {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="/profile" onClick={toggle}>Perfil</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Entrar</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
			
	);
}
