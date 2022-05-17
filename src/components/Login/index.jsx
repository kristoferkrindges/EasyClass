import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import FormLogin from "./Form";
import { Container } from "./style";

function Login() {
	return (
		<Container>
			<Header></Header>
			<FormLogin></FormLogin>
			<Footer></Footer>
		</Container>
	);
}

export default Login;
