import React from "react";
import { Container } from "./style";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Form from "./Form";

export default function Register() {
	return (
		<Container>
			<Header />
			<Form />
			<Footer />
		</Container>
	);
}
