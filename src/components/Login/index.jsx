import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import Sidebar from "../Shared/SideBar";
import Footer from "../Shared/Footer";
import { useUserContext } from "../../context/userContext";
import Auth from "./Auth/auth";
import Dash from "../Shared/Dash";
import { Container } from "./style";

function Login() {
	const { loading, error, user } = useUserContext();

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<div className="container">
				{user ? <div /> : <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>}
				{user ? <div /> : <Navbar toggle={toggle} resp={"Entrar"}></Navbar>}
				{error && <p className="error"> {error}</p>}
				{loading ? (
					<h2 className="carregando">Carregando...</h2>
				) : (
					// <> {user ? <DashBoard type={"Aluno"} /> : <Auth />} </>
					<> {user ? <Dash type={"Aluno"} /> : <Auth />} </>
				)}
				{user ? <div /> : <Footer />}
				{/* <Footer></Footer> */}
			</div>
		</Container>
	);
}

export default Login;
