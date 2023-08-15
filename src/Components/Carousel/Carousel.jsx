import React from 'react';
import "./Carousel.scss"
import Carousel from 'react-bootstrap/Carousel';

export const Carrousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel"
                    src="https://paintingsonline.com.au/cdn/shop/files/Artboard_1_1_2048x.jpg?v=1676828808"
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
                    src="https://paintingsonline.com.au/cdn/shop/files/Artboard_3.jpg?v=1676828906"
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
                    src="https://paintingsonline.com.au/cdn/shop/files/Artboard_2_1_2048x.jpg?v=1676828982"
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