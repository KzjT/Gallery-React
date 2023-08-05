import { Link } from 'react-router-dom'
import './Footer2.scss'

export const Footer2 = () => {



    return (

        <footer class=" footer2">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">

                <li class="nav-item footer-item"><Link to="/" class="nav-link px-2 text-body-secondary ">Home</Link></li>

                <li class="nav-item footer-item"><Link to="/AboutUs" class="nav-link px-2 text-body-secondary ">About Us</Link></li>

                <li class="nav-item footer-item"><Link to="/Gallery" class="nav-link px-2 text-body-secondary ">Gallery</Link></li>

            </ul>
            <p class="text-center text-body-secondary footerText">&copy; 2023 Gallery Art</p>
        </footer>

    )
}

export default Footer2;