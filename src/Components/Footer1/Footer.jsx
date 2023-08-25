import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.scss'
import data from "../../data/data.json"
import logo from '../../img/art_logo.svg';


export const Footer = () => {

    const categoriesNav = data.map(item => item.category)

    const uniqueCategories = new Set(categoriesNav);






    return (

        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 footer1">
            <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <Navbar.Brand as={NavLink} to="/" className="mr-auto full-left">
                        <Image src={logo} alt="ArtAtack Logo" className="logo" /> Art Gallery
                    </Navbar.Brand>
                </a>

            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
                <h5 className='footer-item' >Categories</h5>
                <ul class="nav flex-column">
                    {[...uniqueCategories].map(category => (
                        <Nav.Link className='nav-link footer-item' key={category} as={NavLink} to={`/category/${category}`}>
                            {category}
                        </Nav.Link>
                    ))}
                </ul>
            </div>

            <div class="col mb-3">
                <h5 className='footer-item'>Sections</h5>
                <ul class="nav flex-column">

                    <Nav.Link  as={NavLink} to="/" className="navbar-link nav-item footer-item">
                        Home
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/AboutUs" className="navbar-link footer-item">
                        About Us
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/Gallery" className="navbar-link footer-item">
                        Gallery
                    </Nav.Link>

                </ul>
            </div>


        </footer>

    )
}

export default Footer