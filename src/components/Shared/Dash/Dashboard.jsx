import React, {useEffect, useState} from "react";
import logo from "../../../assets/logo.jpeg";
import Bar from "../Bar";
import {Container, Content} from "./style";
import {useSessionContext} from "../../../context/SessionContextProvider";
import LessonRequestList from "./LessonRequestList/LessonRequestList";
import Sidebar from "../SideBar";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Dash() {

    const {user, awsUser} = useSessionContext();
    console.log(user);
    console.log(awsUser);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <Container>
            <div className="container">
                <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
                <Navbar toggle={toggle} resp={"Entrar"}></Navbar>
                {
                    user && awsUser ? <div></div> :
                        <Bar logo={logo} name={user.displayName} type={awsUser.status} msg={4}/>
                }
                <Content>
                    <LessonRequestList />
                </Content>
                <Footer/>
            </div>
        </Container>
    );
}

export default Dash;
