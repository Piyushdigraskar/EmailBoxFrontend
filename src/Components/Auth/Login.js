import React, { useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import authContext from "../../Store/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const authCtx = useContext(authContext);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const navigate = useNavigate();
    const SubmitHandler = (event)=>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        console.log(enteredEmail, enteredPassword);
        const loginDetails = {
            email: enteredEmail,
            password: enteredPassword
        }
        authCtx.login(loginDetails);
        navigate('/home');
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
    }
    return (
        <Form onSubmit={SubmitHandler}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailInputRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Your Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordInputRef}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;