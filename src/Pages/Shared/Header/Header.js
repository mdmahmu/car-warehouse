import { signOut } from "firebase/auth";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../Images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header>
            <nav>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/home"><img src={logo} alt="logo" className="w-75" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/inventory">Inventory</Nav.Link>
                                <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={NavLink} to="/checkout">Checkout</Nav.Link>
                                {user ?
                                    <Nav.Link as={NavLink} to="/login" onClick={() => signOut(auth)}>Log out</Nav.Link> : <>
                                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link></>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
    );
};

export default Header;