import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Bar from "../Bar";
import {
	Container,
	Wrapper,
	Left,
	Right,
	Info,
	InfoData,
	Data,
	Projects,
	SocialMedia,
	ProjectsData,
	DataTwo,
	Context,
	Infow,
	LabelImage,
	IoCamera,
	InputImage,
	Controller,
	IoPencil,
	IoClose,
} from "./style";
import { useSessionContext } from "../../../context/SessionContextProvider";
import logo from "../../../assets/logo.jpeg";

function EditProfile(props) {
	const { user } = useSessionContext();

	const [clickName, setClickName] = useState(false);
	const [clickPhone, setClickPhone] = useState(false);
	const [clickEmail, setClickEmail] = useState(false);
	const [clickYear, setClickYear] = useState(false);

	function HandlerName() {
		if (clickName == false) {
			setClickName(true);
		} else {
			setClickName(false);
		}
	}

	function HandlerPhone() {
		if (clickPhone == false) {
			setClickPhone(true);
		} else {
			setClickPhone(false);
		}
	}

	function HandlerEmail() {
		if (clickEmail == false) {
			setClickEmail(true);
		} else {
			setClickEmail(false);
		}
	}

	function HandlerYear() {
		if (clickYear == false) {
			setClickYear(true);
		} else {
			setClickYear(false);
		}
	}
	return (
		<Container>
			<Bar logo={logo} name={user.displayName} type={props.type} msg={4} />
			{/* <Context> */}
			<Wrapper>
				<Left>
					<img src={logo} />
					<InputImage
						type="file"
						id="file"
						acceppt="image/*"
						// onChange={handleChange}
					/>
					<LabelImage htmlFor="file">
						<IoCamera></IoCamera>
					</LabelImage>
					<h4 className="title">Estudante</h4>
				</Left>
				<Right>
					{/* <h4 className="title">Estudante</h4> */}
					<Info>
						<h3>Seus Dados</h3>
						<InfoData>
							<Data>
								<form action="">
									<Controller>
										<input
											type="text"
											id="nome"
											style={!clickName ? { display: "none" } : {}}
										/>

										<label
											htmlFor="nome"
											style={!clickName ? { display: "none" } : {}}
										>
											Nome
										</label>
										<label
											className="close"
											htmlFor="nome"
											onClick={HandlerName}
											style={!clickName ? { display: "none" } : {}}
										>
											<IoClose />
										</label>
									</Controller>
								</form>
								<h4 style={clickName ? { display: "none" } : {}}>Nome</h4>
								<p style={clickName ? { display: "none" } : {}}>
									{user.displayName} <IoPencil onClick={HandlerName} />
								</p>
							</Data>
							<Data>
								<form action="">
									<Controller>
										<input
											type="text"
											id="phone"
											style={!clickPhone ? { display: "none" } : {}}
										/>

										<label
											htmlFor="phone"
											style={!clickPhone ? { display: "none" } : {}}
										>
											Telefone
										</label>
										<label
											className="close"
											htmlFor="nome"
											onClick={HandlerPhone}
											style={!clickPhone ? { display: "none" } : {}}
										>
											<IoClose />
										</label>
									</Controller>
								</form>
								<h4 style={clickPhone ? { display: "none" } : {}}>Telefone</h4>
								<p style={clickPhone ? { display: "none" } : {}}>
									999999999 <IoPencil onClick={HandlerPhone} />
								</p>
							</Data>
						</InfoData>
					</Info>
					<Projects>
						{/* <h3>Seus Dados</h3> */}
						<ProjectsData>
							<DataTwo>
								<form action="">
									<Controller>
										<input
											type="text"
											id="email"
											style={!clickEmail ? { display: "none" } : {}}
										/>

										<label
											htmlFor="email"
											style={!clickEmail ? { display: "none" } : {}}
										>
											Email
										</label>

										<label
											className="close"
											htmlFor="nome"
											onClick={HandlerEmail}
											style={!clickEmail ? { display: "none" } : {}}
										>
											<IoClose />
										</label>
									</Controller>
								</form>
								<h4 style={clickEmail ? { display: "none" } : {}}>Email</h4>
								<p style={clickEmail ? { display: "none" } : {}}>
									{user.email} <IoPencil onClick={HandlerEmail} />
								</p>
							</DataTwo>
							<DataTwo>
								<form action="">
									<Controller>
										<input
											type="text"
											id="idade"
											style={!clickYear ? { display: "none" } : {}}
										/>

										<label
											htmlFor="idade"
											style={!clickYear ? { display: "none" } : {}}
										>
											Idade
										</label>

										<label
											className="close"
											htmlFor="nome"
											onClick={HandlerYear}
											style={!clickYear ? { display: "none" } : {}}
										>
											<IoClose />
										</label>
									</Controller>
								</form>
								<h4 style={clickYear ? { display: "none" } : {}}>Idade</h4>
								<p style={clickYear ? { display: "none" } : {}}>
									21 <IoPencil onClick={HandlerYear} />
								</p>
							</DataTwo>
						</ProjectsData>
					</Projects>
					<SocialMedia>
						<ul>
							<li>
								<a href="#">
									<i class="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fab fa-whatsapp"></i>
								</a>
							</li>
						</ul>
					</SocialMedia>
				</Right>
			</Wrapper>
			{/* </Context> */}
		</Container>
	);
}

export default EditProfile;
