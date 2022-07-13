import React from "react";
import {useSessionContext} from "../../context/SessionContextProvider";
import {Container} from "./style";
import Auth from "./Auth/Auth";

function Login() {

    const {loading, user, awsUser} = useSessionContext();

    console.log(user)
    console.log(awsUser)

    return (
        <Container>
            <div className="container">
                { loading ? (<h1 className="carregando">Carregando</h1>) : <Auth /> }
            </div>
        </Container>
    );
}

export default Login;
