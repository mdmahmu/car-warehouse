import React, { useEffect } from 'react';
import { Button, Spinner } from "react-bootstrap";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleLogo from "../../Images/google.ico";

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (user) {
            const url = `https://shielded-scrubland-30055.herokuapp.com/login`;
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

    if (error) {
        alert(error.message);
    }

    if (loading) {
        return <div className="text-center my-5" >
            <Spinner animation="border" variant="warning" />
        </div>;
    }

    return (
        <div className="m-4">
            <div className="d-flex justify-content-center">
                <hr className="w-50" />
                <p className="ms-3 me-3 bold">OR</p>
                <hr className="w-50" />
            </div>
            <div className="d-flex justify-content-center">
                <Button variant="outline-dark" onClick={() => signInWithGoogle()}> <img src={googleLogo} alt="google logo" /> Sign In With Google</Button>
            </div>
        </div>
    );
};

export default GoogleLogin;