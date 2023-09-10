import React from 'react';
import "./Carousel.scss"
import Carousel from 'react-bootstrap/Carousel';

export const Carrousel = () => {
    return (
        <Carousel className='carrousel my-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://www.artgalleryofhamilton.com/wp-content/uploads/2021/07/currentexh1-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='h3Carousel'>Art Gallery</h3>
                    <p className='pCarousel'>
                        The largest art gallery in the world.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://clyffordstillmuseum.org/wp-content/uploads/2020/06/Banner_PlanYourVisit_Accessblity_JF.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='h3Carousel'>
                        artistic excellence</h3>
                    <p className='pCarousel'>The most prestigious artists in the world are found here.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://artlogic-res.cloudinary.com/w_1200,h_630,c_fill,f_auto,fl_lossy/ws-glennbrown/usr/images/exhibitions/home_page_image/174/first-floor-1-med.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='h3Carousel'>exclusive events</h3>
                    <p className='pCarousel'>
                        International events at the hands of industry leaders.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel