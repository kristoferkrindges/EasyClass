import React, { useState } from "react";

import { Context, Card, Left, Right, Div, Buttons, HireMe } from "./style";

import Rating from "../../../Shared/Rating/Ratings";

export default function Message(props) {
	let controll = true;

	const [click, setClick] = useState(true);

	const [openModal, setOpenModal] = useState(false);

	function Handler() {
		if (click == false) {
			setClick(true);
		} else {
			setClick(false);
		}
	}

	if (props.type == "Aceito") {
		return (
			// <Context>
			<Card style={!click ? { boxshadow: "none" } : {}}>
				{openModal && (
					<Rating
						closeModal={setOpenModal}
						img={props.logo}
						name={props.name}
						type={"Professor"}
					/>
				)}
				<Left
					style={controll ? { background: "#94449e" } : {}}
					onClick={Handler}
				>
					<h6>{props.name}</h6>
					<h2>{props.subject}</h2>
					<img src={props.logo}></img>
				</Left>
				<Right style={!click ? { display: "none", boxshadown: "none" } : {}}>
					<Div>
						<h4>Professor(a): {props.name}</h4>
						{/* <h6>{props.name}</h6> */}
					</Div>
					<h2>Aula: {props.subject}</h2>
					<h2>Data: {props.date}</h2>
					<p>Sua aula foi aceita. Parabéns!</p>
					<Buttons>
						<HireMe
							style={controll ? { background: "gray" } : {}}
							onClick={() => {
								setOpenModal(true);
							}}
						>
							{"Avaliar"}
						</HireMe>
						<HireMe style={controll ? { background: "green" } : {}}>
							{props.type}
						</HireMe>
					</Buttons>

					{/* <button
						class="button background1-left-column"
						style={controll ? { background: "green" } : {}}
					>
						{props.type}
					</button> */}
				</Right>
			</Card>
			// </Context>
		);
	} else if (props.type == "Aguardando") {
		return (
			<Card>
				<Left
					style={controll ? { background: "#94449e" } : {}}
					onClick={Handler}
				>
					<h6>{props.name}</h6>
					<h2>{props.subject}</h2>
					<img src={props.logo}></img>
				</Left>
				<Right style={!click ? { display: "none", boxshadown: "none" } : {}}>
					<Div>
						<h4>Professor(a): {props.name}</h4>
						{/* <h6>{props.name}</h6> */}
					</Div>
					<h2>Aula: {props.subject}</h2>
					<h2>Data: {props.date}</h2>
					<p>O professor(a) está analisando sua aula</p>
					<Buttons>
						<HireMe style={controll ? { background: "red" } : {}}>
							{"Cancelar"}
						</HireMe>
						<HireMe style={controll ? { background: "gray" } : {}}>
							{props.type}
						</HireMe>
					</Buttons>
					{/* <button
						class="button background1-left-column"
						style={controll ? { background: "yellow" } : {}}
					>
						{props.type}
					</button> */}
				</Right>
			</Card>
		);
	} else {
		return (
			<Card>
				<Left
					style={controll ? { background: "#94449e" } : {}}
					onClick={Handler}
				>
					<h6>{props.name}</h6>
					<h2>{props.subject}</h2>
					<img src={props.logo}></img>
				</Left>
				<Right style={!click ? { display: "none", boxshadown: "none" } : {}}>
					<Div>
						<h4>Professor(a): {props.name}</h4>
						{/* <h6>{props.name}</h6> */}
					</Div>
					<h2>Aula: {props.subject}</h2>
					<h2>Data: {props.date}</h2>
					<p>Infelizmente sua aula foi recusada :(</p>
					<Buttons>
						<HireMe style={controll ? { background: "gray" } : {}}>
							{"Reenviar"}
						</HireMe>
						<HireMe style={controll ? { background: "red" } : {}}>
							{props.type}
						</HireMe>
					</Buttons>
					{/* <button
						class="button background1-left-column"
						style={controll ? { background: "red" } : {}}
					>
						{props.type}
					</button> */}
				</Right>
			</Card>
		);
	}
}
