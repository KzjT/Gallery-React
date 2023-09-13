import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/art_logo.svg';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config'; 


const NavBar = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const handleGalleryHover = () => {
        setIsGalleryOpen(true);
    };

    const handleGalleryLeave = () => {
        setIsGalleryOpen(false);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const productosRef = collection(db, "productos");
                const snapshot = await getDocs(productosRef);
                const uniqueCategories = new Set();

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    uniqueCategories.add(data.category);
                });

                const categoriesArray = Array.from(uniqueCategories);
                setCategories(categoriesArray);
            } catch (error) {
                console.error("Error al obtener categorías desde Firebase:", error);
            }
        };

        fetchCategories();
    }, []);
    
    return (
        <Navbar className="Navbar container-fluid navv" bg="dark" data-bs-theme="dark">
            <Container fluid className="navbar-container">
                <Navbar.Brand as={NavLink} to="/" className="mr-auto full-left logo-asd">
                    <Image src={logo} alt="ArtAtack Logo" className="logo" /><span className="spanLogo">Art Gallery</span> 
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

                        {categories.map((category) => (
                            <NavDropdown.Item key={category} as={NavLink} to={`/category/${category}`}>
                                {category}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/Contact" className="navbar-link">
                        Contact
                    </Nav.Link>
                </Nav>
            <CartWidget />
            </Container>

            
        </Navbar>
    );
};

export default NavBar;
