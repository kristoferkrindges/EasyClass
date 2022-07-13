import React, { useState } from "react";
import Footer from "../Shared/Footer";
import Article from "./Article";
import TeachersCarrousel from "./TeacherCarrousel/TeacherCarrousel";
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
			<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
			<Navbar toggle={toggle} resp={"Entrar"}></Navbar>
			<Article></Article>
			<TeachersCarrousel></TeachersCarrousel>
			<Footer></Footer>
		</Container>
	);
}
