import React from 'react';
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
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
                    <NavDropdown title="Gallery" id="" className="navbar-link">
                        <Nav.Link as={NavLink} to="/Gallery" className="navbar-link">
                            Gallery

                            <NavDropdown.Item as={NavLink} to="/category/Abstract">Abstract</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/Pop-Art">Pop Art</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/Digital">Digital</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/Esculturas">Esculturas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/Photography">Photography</NavDropdown.Item>
                        </Nav.Link>
                    </NavDropdown>

                </Nav>
            </Container>
            <CartWidget />
        </Navbar>


    );
};

export default NavBar;