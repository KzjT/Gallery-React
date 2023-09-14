import { Link } from 'react-router-dom'
import './Footer2.scss'

export const Footer2 = () => {



    return (

        <footer className=" footer2">

            <ul className="nav justify-content-center border-bottom pb-3 mb-3">

                <li className="nav-item footer-item"><Link to="/" className="nav-link px-2 text-body-secondary ">Home</Link></li>

                <li className="nav-item footer-item"><Link to="/AboutUs" className="nav-link px-2 text-body-secondary ">About Us</Link></li>

                <li className="nav-item footer-item"><Link to="/Gallery" className="nav-link px-2 text-body-secondary ">Gallery</Link></li>

                <li className="nav-item footer-item"><Link to="/Contact" className="nav-link px-2 text-body-secondary ">Contact</Link></li>



            </ul>
            <p className="copyright">&copy; 2023 Gallery Art</p>
        </footer>

    )
}

export default Footer2;