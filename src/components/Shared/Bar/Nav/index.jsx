import React, { useState } from "react";
import { Container } from "./style";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import logo from "../../../../imagens/logo.jpeg";
import { useUserContext } from "../../../../context/userContext";

function Nav(props) {
	const { user, imageUrl, logoutUser } = useUserContext();

	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => setSidebar(!sidebar);

	let indexProp;

	if (props.type == "Professor") {
		indexProp = 1;
	} else {
		indexProp = 0;
	}

	return (
		<Container>
			<IconContext.Provider value={{ color: "#ffff" }}>
				<div className="navbar">
					<div className="fresh">
						<h1>
							Easy<span>Class</span>
						</h1>
						<Link to="#" className="menu-bars">
							<FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
						</Link>
					</div>
					<button onClick={logoutUser}>Sair</button>
				</div>
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						<li className="img-profle">
							<img className="img-p" src={imageUrl? imageUrl : logo}></img>
						</li>
						<li className="user">
							<h1>{props.name}</h1>
							<h2>Perfil: {props.type}</h2>
						</li>
						<hr></hr>
						{SidebarData[indexProp].map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</Container>
	);
}

export default Nav;
