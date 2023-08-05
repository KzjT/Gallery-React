import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Importa NavLink
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/art_logo.svg';

export const NavBar = () => {
    return (
        <Navbar className="Navbar" bg="dark" data-bs-theme="dark">
            <Container fluid className="navbar-container">
                <Navbar.Brand as={NavLink} to="/" className="mr-auto full-left">
                    <Image src={logo} alt="ArtAtack Logo" className="logo" /> Art Gallery
                </Navbar.Brand>
                <Nav className="navbar-center">
                    <Nav.Link as={NavLink} to="/" className="navbar-link">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/aboutUs" className="navbar-link">
                        About Us
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/gallery" className="navbar-link">
                        Gallery
                    </Nav.Link>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    );
};

export default NavBar;