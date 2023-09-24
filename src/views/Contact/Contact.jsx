import React from 'react';
import Map from "../../Components/Map/Map";
import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { notifySuccesContact, notifyErrorInputsIncomplete, notifyServerErrorSending } from "../../helpers/noti-toasty"
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';

export const Contact = () => {
    const db = getFirestore();
    const contactCollection = collection(db, "contacts");
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (!name || !email || !message) {
            notifyErrorInputsIncomplete();
            return;
        }

        const contactData = {
            name,
            email,
            message,
        };

        addDoc(contactCollection, contactData)
            .then(() => {
                event.target.reset();
                notifySuccesContact(name);
            })
            .catch((error) => {
                notifyServerErrorSending(error)
            });
    };

    return (
        <div className="contact-page">
            <h1 className="h1-tittle">Contact Us</h1>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input type="text" className="form-control" id="name" placeholder='name' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" id="email" placeholder='email' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea className="form-control" id="message" rows="4" placeholder='your message'></textarea>
                                </div>
                                <div className='btn-Contact-Container'>
                                    <button type="submit" className="btn btn-primary btn-contact">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 contact-info">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <Link target="_blank" rel="noopener noreferrer" to="https://www.google.com/maps?sca_esv=567928140&rlz=1C1UEAD_esAR1051AR1051&output=search&q=louvre+museum&source=lnms&entry=mc&sa=X&ved=2ahUKEwiL79mSpcKBAxVnJrkGHV6LCO0Q0pQJegQIEhAB" className='locationContact'>
                                    <i className="fas fa-map-marker-alt"> <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </i> Address: 75001 París, Francia
                                </Link>

                                <Link target="_blank" rel="noopener noreferrer" to="tel:+5224567890" className='phoneContact'>
                                    <i className="fas fa-phone-alt">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </i> Phone: (+522) 456-7890
                                </Link>

                                <Link target="_blank" rel="noopener noreferrer" to="mailto:ArtGallery@info.com" className='mailContact'>
                                    <i className="fas fa-envelope">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </i> Email: ArtGallery@info.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <div className="container">
                    <h3 className="h1-tittle">Location</h3>
                    <Map />
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}

export default Contact;
