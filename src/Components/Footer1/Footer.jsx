import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.scss'



export const Footer = () => {

    return (
        
            <footer class="d-flex flex-wrap justify-content-between align-items-center footer1">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2020-2023 Gallery</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link className="text-body-secondary" to="https://twitter.com/" target='_blank'><FaTwitter /></Link></li>
                    <li className="ms-3"><Link className="text-body-secondary" to="https://www.instagram.com/" target='_blank'><FaInstagram /></Link></li>
                    <li className="ms-3"><Link className="text-body-secondary" to="https://www.facebook.com/" target='_blank'><FaFacebook /></Link></li>
                </ul>
            </footer>
    )
}

export default Footer