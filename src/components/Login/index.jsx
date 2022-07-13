import React from "react";
import {useUserContext} from "../../context/userContext";
import {Navigate} from "react-router-dom"
import {Container} from "./style";

function Login() {

    const {loading, user, awsUser} = useUserContext();

    console.log(user)
    console.log(awsUser)

    return (
        <Container>
            <div className="container">
                {
                    loading ? (<h2 className="carregando">Carregando...</h2>) :
                        (user && awsUser ? <Navigate to="/dashboard" replace={true}/> :
                            <Navigate to="/login" replace={true}/>)
                }
            </div>
        </Container>
    );
}

export default Login;
