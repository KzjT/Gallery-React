import React from 'react';
import './AboutUs.scss';
import direct1 from "../../../assets/direct1.jpg";
import direct2 from "../../../assets/direct2.jpg";
import expo1 from "../../../assets/expo1.jpeg";
import expo2 from "../../../assets/expo2.jpg";
import expo3 from "../../../assets/expo3.jpg";

const AboutUs = () => {
    return (
        <div className="about-us container-fluid">
            <section className="owners-section container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="owners">
                                <div className="owner">
                                    <img src={direct2} alt="Owner 1" className="img-fluid rounded-circle owner-img" />
                                    <h4 className="owner-name">Ana García</h4>
                                    <p className="owner-role">Creative director</p>
                                </div>
                                <div className="owner">
                                    <img src={direct1} alt="Owner 2" className="img-fluid rounded-circle owner-img" />
                                    <h4 className="owner-name">Luis Martínez</h4>
                                    <p className="owner-role">Main Artist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <h1 className="section-title title-color">About Us</h1>
                                <p className="lead">
                                    Welcome to our art studio, where creativity and passion come together to create amazing works. With years of experience in the world of art, we are proud to present our unique and expressive creations.
                                </p>
                                <p>
                                    Our team is made up of Ana García, our Creative Director, and Luis Martínez, our Main Artist. Together, we combine our unique visions to produce art that resonates with emotions and deep meanings.
                                </p>
                                <p>
                                    Join us on this exciting artistic journey and explore the world of creativity with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work-section">
                <div className="container">
                    <h2 className="section-title title-color">Our work</h2>
                    <p className="lead">
                        Explore some of our latest artwork and discover the diversity of styles and techniques that we use to express our creativity.
                    </p>
                    <div className="row featurette mt-5">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1 title-color">First featurette heading. <span className="text-body-secondary title-color">It’ll blow your mind.</span></h2>
                            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        </div>
                        <div className="col-md-5">
                            <img
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto container-img-aboutUs"
                                width="500"
                                height="500"
                                src={expo1}
                                alt="Placeholder: 500x500"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            />
                        </div>
                    </div>

                    <hr className="featurette-divider mb-5" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1 title-color">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto container-img-aboutUs"
                                width="500"
                                height="500"
                                src={expo3}
                                alt="Placeholder: 500x500"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            />
                        </div>
                    </div>

                    <hr className="featurette-divider mb-5" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1 title-color">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                        </div>
                        <div className="col-md-5">
                            <img
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto container-img-aboutUs"
                                width="500"
                                height="500"
                                src={expo2}
                                alt="Placeholder: 500x500"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="featurette-divider mb-0" />
        </div>
    );
};

export default AboutUs;
