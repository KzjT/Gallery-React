import React from 'react';
import { Link } from 'react-router-dom';
import './Footer2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer2 = () => {
    return (
        <footer className="footer2">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item footer-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-item footer-item"><Link to="/AboutUs" className="nav-link px-2 text-body-secondary">About Us</Link></li>
                <li className="nav-item footer-item"><Link to="/Gallery" className="nav-link px-2 text-body-secondary">Gallery</Link></li>
                <li className="nav-item footer-item"><Link to="/Contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
            </ul>
            <p className="art-gallery-text">Art Gallery 2023 ©</p>
            <div className="footer-content">

                <div className="github-content">
                    <a
                        href="https://github.com/Lukjjz95"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                    </a>
                    <p className="github-text">Proyecto realizado por Lucas Marchese</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;