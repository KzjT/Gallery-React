import React, { useState } from 'react';
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/art_logo.svg';
import data from "../../data/data.json";


export const NavBar = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const handleGalleryHover = () => {
        setIsGalleryOpen(true);
    };

    const handleGalleryLeave = () => {
        setIsGalleryOpen(false);
    };

    const categoriesNav = data.map(item => item.category)

    const uniqueCategories = new Set(categoriesNav);



    return (
        <Navbar className="Navbar container-fluid navv" bg="dark" data-bs-theme="dark">
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
    
                    <NavDropdown
                        title="Gallery"
                        id=""
                        className="navbar-link"
                        show={isGalleryOpen}
                        onMouseEnter={handleGalleryHover}
                        onMouseLeave={handleGalleryLeave}
                    >
                        <NavDropdown.Item as={NavLink} to="/Gallery" className="navbar-link">
                            All Categories
                        </NavDropdown.Item>
    
                        {[...uniqueCategories].map(category => (
                            <NavDropdown.Item key={category} as={NavLink} to={`/category/${category}`}>
                                {category}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
            </Container>
            <div className='cartWidgetContainer'>
                <CartWidget />
            </div>
        </Navbar>
    );
 }

export default NavBar;