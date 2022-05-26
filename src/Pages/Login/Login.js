import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form, Spinner } from "react-bootstrap";
import auth from "../../firebase.init";
import loginImage from '../../Images/login.png';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        if (error) {
            alert(error.message);
        }
    };

    if (loading) {
        return <div className="text-center my-5" >
            <Spinner animation="border" variant="warning" />
        </div>;
    }

    return (
        <div className="container mt-3 mb-4">
            <h1 className="text-center m-3">LOGIN FORM</h1>
            <div className="row d-flex align-content-center justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={loginImage} alt="login img" className="w-100 p-3" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;