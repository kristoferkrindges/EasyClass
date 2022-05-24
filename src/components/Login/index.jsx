import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useUserContext } from "../../context/userContext";
import Auth from "./Auth/auth";
import Dashboard from "./Dashboard/dashboard";
import { Container } from "./style";

function Login() {
	const { loading, error, user } = useUserContext();
	return (
		<Container>
			<div className="container">
				<Header></Header>
				{error && <p className="error"> {error}</p>}
				{loading ? (
					<h2 className="carregando">Carregando...</h2>
				) : (
					<> {user ? <Dashboard /> : <Auth />} </>
				)}
				<Footer></Footer>
			</div>
		</Container>
	);
}

export default Login;
