import React from 'react';
import { Button, Form } from "react-bootstrap";
import loginImage from '../../Images/login.png';


const Login = () => {
    return (
        <div className="container mt-3 mb-4">
            <h1 className="text-center m-3">LOGIN FORM</h1>
            <div className="row d-flex align-content-center justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={loginImage} alt="login img" className="w-100 p-3" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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