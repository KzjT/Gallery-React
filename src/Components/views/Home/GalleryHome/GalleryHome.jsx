import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GalleryHome.scss';

export const GalleryHome = () => {
    const images = [
        {
            src: 'https://www.singulart.com/images/artworks/v2/cropped/27745/main/zoom/1670203_a57cd2685cf6aa2ba36d783fc2f2c751.jpeg',
            alt: 'asd',
            link: '/enlace1',
        },
        {
            src: 'https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3BpY3R1cmVzXC9jcm9wcGVkXC83MTg5XC8yMzg0MVwvem9vbVwvc2VyaWVfMjM4NDFfZTk1MGYwYTRkMTc0OGRjYzI1ZjRmMzc4NmIzZWQ1YzcuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTA4NCwiaGVpZ2h0Ijo3NzgsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6IndlYnAifX0=?signature=13b8462672f06a9a091cda99f4ab7e3fd524d64d76bcb3c5a135c01d9ad0efe7',
            alt: 'asd',
            link: '/enlace2',
        },
    ];


    const [expanded, setExpanded] = useState(null);


    const handleImageClick = (index) => {
        if (expanded === index) {

            setExpanded(null);
        } else {
            setExpanded(index);
        }
    };

    return (
        <div>
            <section className="sectionGalleryHome col-md-4 col-sm-6">
                {images.map((image, index) => (
                    <div key={index} className={`image-container ${expanded === index ? 'expanded' : ''}`}>
                        <img src={image.src} alt={image.alt} onClick={() => handleImageClick(index)} />
                        {expanded === index && (
                            <div className="image-button-container">
                                <Link to={image.link} className="image-button">
                                    Ver más
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default GalleryHome;
