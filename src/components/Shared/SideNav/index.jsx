import React from "react";
import {Container} from "./style"
import Header from "./Header"
import SideBar from "./Sidebar"

function SideNav(props) {
	return (
		<Container>
            {/* <input type="checkbox" className="check"/> */}
            <Header></Header>
            <SideBar className="sidebar2"
                logo={props.logo}
                name={props.name}
                type={props.type}
                msg={props.msg}
            />
        </Container>  
	);
}

export default SideNav