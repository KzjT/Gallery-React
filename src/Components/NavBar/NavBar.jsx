import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import logo from "../../img/art_logo.svg"



export const NavBar = () => {
    return (
        <Navbar className="Navbar" bg="dark" data-bs-theme="dark">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="#home"  className="mr-auto  full-left">
                    <Image src={logo} alt="ArtAtack Logo" className="logo" /> Art Gallery
                </Navbar.Brand>
                <Nav className="navbar-center">
                    <Nav.Link className="navbar-link" href="#home" >Home</Nav.Link>
                    <Nav.Link href="#features" className="navbar-link">About Us</Nav.Link>
                    <Nav.Link href="#pricing" className="navbar-link">Gallery</Nav.Link>
                </Nav>
            </Container>

            <CartWidget /> 

        </Navbar>
    );
};

export default NavBar;