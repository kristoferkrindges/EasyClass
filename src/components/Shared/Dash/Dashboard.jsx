import React, {useEffect, useState} from "react";
import logo from "../../../assets/logo.jpeg";
import Bar from "../Bar";
import { Container, Content } from "./style";
import { useUserContext } from "../../../context/userContext";
import LessonRequestList from "./LessonRequestList/LessonRequestList";
import { useLessonRequestContext } from "./ContextProvider/LessonRequestContextProvider";
import Sidebar from "../SideBar";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Dash() {

	const { user, awsUser } = useUserContext();
	const { lessonRequests, getLessonRequest, error } = useLessonRequestContext();
	getLessonRequest(awsUser.userId, awsUser.role)

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	console.log(lessonRequests)

	return (
		<Container>
			<div className="container">
				<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
				<Navbar toggle={toggle} resp={"Entrar"}></Navbar>
				{error && <p className="error"> {error}</p>}
				<Bar logo={logo} name={user.displayName} type={awsUser.status} msg={4} />
				<Content>
					<LessonRequestList lessonRequests={lessonRequests} />
				</Content>
				<Footer />
			</div>
		</Container>
	);
}

export default Dash;
