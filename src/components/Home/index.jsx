import React, { useState } from "react";
// import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Article from "./Article";
import Section from "./Section";
import { Container } from "./styles";
import Navbar from "../Shared/Navbar";
import Sidebar from "../Shared/SideBar";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			{/* <Header></Header> */}
			<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
			<Navbar toggle={toggle} resp={"Entrar"}></Navbar>
			<Article></Article>
			<Section></Section>
			<Footer></Footer>
		</Container>
	);
}
