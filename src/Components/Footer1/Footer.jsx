import React from 'react';
import {  Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import data from '../../data/data.json';
import logo from '../../img/art_logo.svg';

export const Footer = () => {
    const categoriesNav = data.map(item => item.category);
    const uniqueCategories = new Set(categoriesNav);

    return (
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 footer1">
            <div className="col mb-3"></div>

            <div className="col mb-3">
                <h5 className="footer-item h5Footer">Categories</h5>
                <ul className="nav flex-column">
                    {[...uniqueCategories].map(category => (
                        <Nav.Link
                            className="nav-link footer-item"
                            key={category}
                            as={NavLink}
                            to={`/category/${category}`}
                        >
                            {category}
                        </Nav.Link>
                    ))}
                </ul>
            </div>

            <div className="col mb-3 logoFooter">
                <a href="/" className="d-flex flex-column align-items-center mb-3 link-dark text-decoration-none">
                    <Image src={logo} alt="ArtAtack Logo" className="logo" />
                    <span>Art Gallery</span>
                </a>
            </div>

            <div className="col mb-3 section-footer1">
                <h5 className="footer-item h5Footer">Sections</h5>
                <ul className="nav flex-column">
                    <Nav.Link as={NavLink} to="/" className="navbar-link nav-item footer-item">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/AboutUs" className="navbar-link footer-item">
                        About Us
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Gallery" className="navbar-link footer-item">
                        Gallery
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Contact" className="navbar-link footer-item">
                        Contact
                    </Nav.Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
