import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/art_logo.svg';
import { scrollToTop } from '../../helpers/xzy';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { NavLink } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
export const Footer = () => {
    const [categories, setCategories] = useState([]);
    const [email, setEmail] = useState('');

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

    scrollToTop(window);

    const clearEmail = () => {
        setEmail('');
    };

    const handleSubscribeClick = () => {
        toast.success('You have registered for our newsletter, stay tuned for our promotions!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        clearEmail();
    };

    return (
        <footer className=" py-5">
            <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h5>Policies</h5>
                    <ul className="nav flex-column">

                        <li className="nav-item mb-2">
                            <Link to="/Contact" onClick={scrollToTop} className="nav-link p-0 text-muted">
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/Contact" onClick={scrollToTop} className="nav-link p-0 text-muted">
                                shipments
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/Contact" onClick={scrollToTop} className="nav-link p-0 text-muted">
                                Return policy
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/Contact" onClick={scrollToTop} className="nav-link p-0 text-muted">
                                Terms and Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Sections</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/AboutUs" className="nav-link p-0 text-muted" onClick={scrollToTop}>About Us</Link></li>
                        <li className="nav-item mb-2"><Link to="/Gallery" className="nav-link p-0 text-muted" onClick={scrollToTop}>Gallery</Link></li>
                        <li className="nav-item mb-2"><Link to="/Contact" className="nav-link p-0 text-muted" onClick={scrollToTop}>Contact</Link></li>
                        <li className="nav-item mb-2"><Link to="/Contact" className="nav-link p-0 text-muted" onClick={scrollToTop}>Help</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Categories</h5>
                    <ul className="nav flex-column">
                        {categories.map((category) => (
                            <li className="nav-item mb-2" key={category}>
                                <Link
                                    className="nav-link p-0 text-muted"
                                    as={NavLink}
                                    to={`/category/${category}`}
                                >
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                    <img src={logo} alt="logo" />
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input
                                id="newsletter1"
                                type="text"
                                className="form-control"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => {
                                    handleSubscribeClick();
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
