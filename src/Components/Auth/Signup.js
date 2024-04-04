import React, { useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import authContext from "../../Store/Context/AuthContext";
const Signup = () => {

    const authCtx = useContext(authContext);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const repasswordInputRef = useRef();
    const SubmitHandler = (event)=>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassWord= passwordInputRef.current.value;
        const enteredRepassword = repasswordInputRef.current.value;
        console.log(enteredEmail, enteredPassWord, enteredRepassword);
        if(enteredPassWord !== enteredRepassword){
            return;
        }
        const authDetails = {
            email:enteredEmail,
            password:enteredPassWord,
        }
        authCtx.signUp(authDetails);
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
        repasswordInputRef.current.value = '';
    }
    return (
        <Form onSubmit={SubmitHandler}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailInputRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Your Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordInputRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRePassword">
                <Form.Label>Enter Your Password Again:</Form.Label>
                <Form.Control type="password" placeholder="RePassword" ref={repasswordInputRef}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Signup
            </Button>
        </Form>
    );
}

export default Signup;