import React, { useState, useEffect } from "react";
import Bar from "../Bar";
import {
	Container,
	Context,
	Top,
	Bottom,
	Layout,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Buttons,
	HireMe,
	IoCamera,
	InputImage,
	LabelImage,
	Title,
	UserDetails,
	InputBox,
	Collection,
} from "./style";
import { useUserContext } from "../../../context/userContext";
import logo from "../../../assets/logo.jpeg";

function Edit(props) {
	const { user, setPhoto, photoURL, handleChange, handleClick } =
		useUserContext();

	const [clickName, setClickName] = useState(false);
	const [clickPhone, setClickPhone] = useState(false);
	const [clickEmail, setClickEmail] = useState(false);
	const [clickYear, setClickYear] = useState(false);

	const [open, setOpen] = useState(false);

	function HandlerOpen() {
		if (open == false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}

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
			<Context>
				<Layout style={!open ? { background: "none" } : {}}>
					<Top>
						<CardContent>
							<Image>
								<Logo src={photoURL} />
								<InputImage
									type="file"
									id="file"
									name="image"
									acceppt="image/*, png, jpeg, jpg"
									onChange={handleChange}
								/>
								<LabelImage
									htmlFor="file"
									style={!open ? { display: "none" } : {}}
								>
									<IoCamera></IoCamera>
								</LabelImage>
							</Image>
							<NameSubject>
								<Name style={open ? { margin: "20% 0% 0% 0%" } : {}}>
									{open ? "Estudante" : user.displayName}
								</Name>
							</NameSubject>
							<Buttons
								onClick={HandlerOpen}
								style={open ? { display: "none" } : {}}
							>
								<HireMe>Editar</HireMe>
							</Buttons>
						</CardContent>
					</Top>
					<Bottom style={!open ? { display: "none" } : {}}>
						<Title>Editar perfil</Title>
						<Collection>
							<form>
								<UserDetails>
									<InputBox>
										<span class="details">Nome</span>

										<input
											type="text"
											placeholder="Digite seu Nome..."
											required
											value={user.displayName}
										/>
									</InputBox>
									<InputBox>
										<span class="details">Email</span>
										<input
											type="text"
											placeholder="Digite seu Email..."
											required
											value={user.email}
										/>
									</InputBox>
									<InputBox>
										<span class="details">Telefone</span>
										<input
											type="text"
											placeholder="Digite seu Telefone..."
											required
										/>
									</InputBox>
									<InputBox>
										<span class="details">Senha</span>
										<input
											type="text"
											placeholder="Digite seu Senha..."
											required
										/>
									</InputBox>
									<Buttons
										onClick={HandlerOpen}
										style={open ? { margin: "8% 0% 0% 0%" } : {}}
									>
										<HireMe onClick={handleClick}>Pronto</HireMe>
									</Buttons>
								</UserDetails>
							</form>
						</Collection>
					</Bottom>
				</Layout>
			</Context>
		</Container>
	);
}

export default Edit;
