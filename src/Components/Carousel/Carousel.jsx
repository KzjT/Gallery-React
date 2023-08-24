import React from 'react';
import "./Carousel.scss"
import Carousel from 'react-bootstrap/Carousel';

export const Carrousel = () => {
    return (
        <Carousel className='carrousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://www.artgalleryofhamilton.com/wp-content/uploads/2021/07/currentexh1-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://clyffordstillmuseum.org/wp-content/uploads/2020/06/Banner_PlanYourVisit_Accessblity_JF.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://artlogic-res.cloudinary.com/w_1200,h_630,c_fill,f_auto,fl_lossy/ws-glennbrown/usr/images/exhibitions/home_page_image/174/first-floor-1-med.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel