import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form, Spinner } from "react-bootstrap";
import auth from "../../firebase.init";
import loginImage from '../../Images/login.png';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    useEffect(() => {

        if (user) {
            const url = `http://localhost:5000/login`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    emailOrUid: user?.user?.email || user?.user?.providerData[0]?.uid
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then(result => {
                    localStorage.setItem('accessToken', result.jwtAccessToken);
                    navigate(from, { replace: true });
                }
                );
        }
    }, [user]);

    const handleLogin = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        if (error) {
            alert(error.message);
        }
    };

    const handleResetPassword = async event => {
        event.preventDefault();
        if (email) {
            await sendPasswordResetEmail(email);
            if (error2) {
                alert(error2.message);
            } else {
                toast('Sent email');
            }
        }
        else {
            toast('Enter your email first');
        }
    };

    if (loading) {
        return <div className="text-center my-5" >
            <Spinner animation="border" variant="warning" />
        </div>;
    }

    if (sending) {
        return <h2 className="text-center my-5 text-dark">Sending...</h2>;
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
                    <br />
                    <p>Forgot password ?<Button variant="link" className="text-decoration-none text-danger" onClick={handleResetPassword}>Click here to reset</Button></p>
                    <p>New to Car Warehouse ? <NavLink to='/register' className="text-danger text-decoration-none" >Create an account</NavLink></p>
                    <ToastContainer />
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;