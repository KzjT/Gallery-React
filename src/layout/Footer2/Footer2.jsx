import React from "react";
import { Link } from "react-router-dom";
import "./Footer2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ModalFooter } from "react-bootstrap";
export const Footer2 = () => {


    const scrollToTop2 = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);
    };

    return (
        <ModalFooter className="footer2">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3 ul-footer2">
                <li className="nav-item footer-item">
                    <Link to="/" onClick={scrollToTop2} className="nav-link px-2 text-body-secondary">
                        Home
                    </Link>
                </li>
                <li className="nav-item footer-item">
                    <Link to="/AboutUs" onClick={scrollToTop2} className="nav-link px-2 text-body-secondary">
                        About Us
                    </Link>
                </li>
                <li className="nav-item footer-item">
                    <Link to="/Gallery" onClick={scrollToTop2} className="nav-link px-2 text-body-secondary">
                        Gallery
                    </Link>
                </li>
                <li className="nav-item footer-item">
                    <Link to="/Contact" onClick={scrollToTop2} className="nav-link px-2 text-body-secondary">
                        Contact
                    </Link>
                </li>
            </ul>
            <p className="art-gallery-text">Art Gallery 2023 ©</p>
            <div className="footer-content">
                <div className="github-content">
                    <a
                        href="https://github.com/Lukjjz95/Gallery-React"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            className="github-icon"
                        />
                    </a>
                    <p className="github-text">Proyecto realizado por Lukjjz</p>
                </div>
            </div>
        </ModalFooter>
    );
};

export default Footer2;
