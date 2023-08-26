import React from 'react';
import Map from "../../Map/Map";
import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-section">
                <div className="container">
                    <h2 className="section-title">Contact Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                    Email
                                    </label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                    Message
                                    </label>
                                    <textarea className="form-control" id="message" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 contact-info">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <p><i className="fas fa-map-marker-alt"> <FontAwesomeIcon icon={faMapMarkerAlt} /></i> Address: 75001 París, Francia</p>
                                <p><i className="fas fa-phone-alt"><FontAwesomeIcon icon={faPhoneAlt} /></i> Phone: (+522) 456-7890</p>
                                <p><i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i> Email: ArtGallery@info.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h3>Location</h3>
                    <Map />
                </div>
            </section>
        </div>
    )
}

export default Contact;
