import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form, Spinner } from "react-bootstrap";
import regImage from '../../Images/registration.png';
import auth from "../../firebase.init";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Register = () => {

    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;

        if (password === confirmedPassword) {
            createUserWithEmailAndPassword(email, password);
            if (error) {
                alert(error.message);
            }
        }
    };

    if (loading) {
        return <div className="text-center my-5" >
            <Spinner animation="border" variant="warning" />
        </div>;
    }

    return (
        <div className="container mt-3 mb-4">
            <h1 className="text-center m-3">REGISTRATION FORM</h1>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={regImage} alt="registration img" className="w-100" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
                            <Form.Label>Confirmed password</Form.Label>
                            <Form.Control type="password" name="confirmedPassword" placeholder="Confirmed password" onChange={(e) => setConfirmedPassword(e.target.value)} />
                            <Form.Text className="text-danger">
                                {(password !== confirmedPassword) ? 'Both password did not match' : ''}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to the terms & conditions" onClick={() => setAgree(!agree)} />
                        </Form.Group>
                        {
                            agree ? <Button variant="warning" type="submit" className="px-3">Register</Button> : <Button variant="light" type="submit" className="px-3" disabled>Register</Button>
                        }
                    </Form>
                    <br />
                    <p>Already registered ? <NavLink to='/login' className="text-danger text-decoration-none" >Login</NavLink>
                    </p>
                </div>
            </div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;