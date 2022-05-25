import React from 'react';
import { Button, Form } from "react-bootstrap";
import regImage from '../../Images/registration.png';

const Register = () => {
    return (
        <div className="container mt-3 mb-4">
            <h1 className="text-center m-3">REGISTRATION FORM</h1>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={regImage} alt="registration img" className="w-100" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
                            <Form.Label>Confirmed password</Form.Label>
                            <Form.Control type="password" placeholder="Confirmed password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to the terms & conditions" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;