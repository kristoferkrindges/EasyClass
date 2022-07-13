import React, {useState, useRef} from "react";
import {Container} from "./style";
import {useSessionContext} from "../../../context/SessionContextProvider";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../../firebase";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const initialState = {
        role: "",
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fields, setFields] = useState(initialState);
    const {setUser, setAwsUser, setPhoto, setPhotoUrl} = useSessionContext();

    const image = useRef();
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const psdRef = useRef();
    const roleRef = useRef();

    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const password = psdRef.current.value;
        const role = roleRef.current.value;
        if (email
            && firstName
            && lastName
            && password) {
            registerUser(
                email,
                firstName,
                lastName,
                password,
                role
            );
        }
    };

    async function registerUser(email, firstName, lastName, password, role) {
        let fullName = firstName + " " + lastName
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                updateProfile(auth.currentUser, {
                    displayName: fullName,
                });
                doRegisterAWS(res.user, firstName, lastName, role)
            })
            .catch((err) => setError(err.message))
    }

    async function doRegisterAWS(user, firstName, lastName, role) {
        api
            .post(
                "/register",
                {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": user.email,
                    "userRemoteId": user.uid
                },
                {params: {registerRole: role}}
            )
            .then((response) => {
                if (response) {
                    fetchUser(user)
                }
            })
            .catch((error) => {
                setError(error.message)
            })
    }

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
                navigate("/dashboard", { replace: true })
            })
    }


    const handleFieldsChange = (e) =>
        setFields({
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value,
        });

    return (
        <Container>
            <div className="form">
                <h2>Cadastro</h2>
                <form onSubmit={onSubmit}>
                    <h3>O que quero fazer?</h3>
                    <select ref={roleRef}>
                        <option value="TEACHER">Ensinar</option>
                        <option value="STUDENT">Aprender</option>
                    </select>
                    <input
                        placeholder="Nome"
                        id="firstName"
                        name="firstName"
                        type="text"
                        ref={firstNameRef}
                        value={fields.firstName}
                        onChange={handleFieldsChange}
                    />
                    <input
                        placeholder="Sobrenome"
                        id="lastname"
                        name="lastname"
                        type="text"
                        ref={lastNameRef}
                        value={fields.lastname}
                        onChange={handleFieldsChange}
                    />
                    <input
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="email"
                        ref={emailRef}
                        value={fields.email}
                        onChange={handleFieldsChange}
                    />
                    <input
                        placeholder="Senha"
                        id="password"
                        name="password"
                        type="password"
                        ref={psdRef}
                        value={fields.password}
                        onChange={handleFieldsChange}
                    />
                    <input
                        placeholder="Confirmar Senha"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={fields.confirmPassword}
                        onChange={handleFieldsChange}
                    />
                    <input
                        type="file"
                        placeholder="Insira a sua imagem de perfil"
                        name="image"
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </Container>
    );
};

export default Signup;
