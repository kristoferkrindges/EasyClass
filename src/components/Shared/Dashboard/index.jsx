import React, {useState} from "react";
import { useParams } from "react-router-dom";
import logo from "../../../assets/logo.jpeg"
import Bar from "../Bar"
import {Container} from "./style"
import Board from "./Board";

function DashBoard(props) {
	return (
		<Container>
			<Bar
				logo={logo}
				name={"Kristofer Krindges"}
				type={props.type}
				msg={4}
			/>
			<Board
				logo={logo}
				name={"Kristofer Krindges"}
				type={props.type}
				year={21}
				email={"fulaninho123@gmail.com"}
			/>
		</Container>
	);
}

export default DashBoard;
