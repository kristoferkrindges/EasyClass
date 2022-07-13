import React, {useRef, useState} from "react";
import {Container} from "./style";
import {useSessionContext} from "../../../context/SessionContextProvider";
import {sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../firebase";
import api from "../../../services/api";
import {useNavigate} from "react-router-dom";
import Loading from "../../Shared/Loader";

const SignIn = () => {

    const emailRef = useRef();
    const psdRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {setAwsUser, setUser} = useSessionContext();

    let navigate = useNavigate();

    const onEnterClicked = () => {
        setLoading(true);
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        if (email && password) {
            signInUser(email, password);
        }
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                fetchUser(res.user)
            })
            .catch((err) => setError(err.message))
    };

    async function fetchUser(user) {
        api
            .post("/login", {"userRemoteId": user.userRemoteId})
            .then((res) => {
                setUser(user)
                let actualUser = res.data.filter((awsUser) => {
                    return user.uid === awsUser.userRemoteId
                })
                if (actualUser.length > 0) {
                    setAwsUser(actualUser[0])
                }
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
                navigate("/dashboard", {replace: true})
            })
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (email)
            forgotPassword(email).then(() => {
                emailRef.current.value = "";
                alert("Email enviado para a sua caixa de entrada!");
            });
    };

    return (
        <Container>
            <div className="form">
                <h2>Login</h2>
                <form onSubmit={onEnterClicked}>
                    <input
                        placeholder="Email"
                        type="email"
                        ref={emailRef}
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        ref={psdRef}
                    />
                    {
                        loading ? <Loading /> : <button onClick={() => { onEnterClicked() }}> Entrar </button>
                    }
                    <p onClick={forgotPasswordHandler}>Esqueceu a senha?</p>
                </form>
            </div>
        </Container>
    );
};

export default SignIn;
